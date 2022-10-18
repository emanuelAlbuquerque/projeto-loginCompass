const temperatura = document.querySelector('#temperatura')//Containet da temperatura
const iconeTempo = document.querySelector('#icone_tempo')//Container do ícone
const cidadeAtual = document.querySelector('#cidade_atual')//Container da cidade
const estadoAtual = document.querySelector('#estado_atual')//Container do estado

const api = {
  base: 'http://api.weatherapi.com/v1/current.json',
  key: '156dab497a1e4b7c9a225733221510',
  lang: 'pt'
}

window.addEventListener('load', pegaLocalizacao)//Quando o documento carregar ja começa peando a localização



function pegaLocalizacao(){
  if ('geolocation' in navigator) {
    let watchId = navigator.geolocation.watchPosition(position, errorLocalizacao)
    //Pergunta ao navegador se tem giolocalização, se tiver pega a position passando como parâmetro para as funções.
  } else {
    alert('Navegador não suporta geolocalização')
  }

  function position(position) {

    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    buscaTempo(latitude, longitude)
    buscaEstado(latitude, longitude)
  }

  function errorLocalizacao(error) {
    alert(`Erro: ${error.message} // Geolocalização negada pelo usuário`)
  }
}


function buscaTempo(lat, long) {
  fetch(`${api.base}?key=${api.key}&q=${lat} ${long}&aqi=no`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`http error: status ${response.status}`)//Se a reposta for errada
      }
      return response.json()//Se for certa
    })
    .then(response => {
      let temp = Math.round(response.current.temp_c)//Pega a temperatura
      let icon = response.current.condition.icon//Pega o ícone 
      let cidade = response.location.name//Pega a cidade
      mostraTempo(icon, temp, cidade)
    })
    //Faz a requizição da api, com a latitude e longitude
}


function buscaEstado(lat, long) {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}`)
      .then((response) => {
          return response.json()
      })
      .catch((error) => {
        alert(`Error: ${error.message}`)//Se for errado
      })
      .then((response) => {
        let estado = response.features[0].properties.address['ISO3166-2-lvl4']
        mostraCidade(estado)
          
      })
}

function mostraCidade(estado){
  if(estado != undefined){//O estado pode retornar undefined se ele não encontrar o estado
    let pegaEstado = estado.split('-')//Separa a string
    estadoAtual.innerHTML = ` - ${pegaEstado[1]}`//Pega apenas a sigla do estado
  }
}


function mostraTempo(icone, temp, cidade) {
  temperatura.innerHTML = `${temp}º`
  iconeTempo.src = icone
  cidadeAtual.innerHTML = cidade
}

