const cidadeEstado = document.querySelector('#cidade_estado')
const temperatura = document.querySelector('#temperatura')
const iconeTempo = document.querySelector('#icone_tempo')
const cidadeAtual = document.querySelector('#cidade_atual')
const estadoAtual = document.querySelector('#estado_atual')

const api = {
  base: 'http://api.weatherapi.com/v1/current.json',
  key: '156dab497a1e4b7c9a225733221510',
  lang: 'pt'
}

window.addEventListener('load', pegaLocalizacao)



function pegaLocalizacao(){
  if ('geolocation' in navigator) {
    let watchId = navigator.geolocation.watchPosition(position, errorLocalizacao)
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
        throw new Error(`http error: status ${response.status}`)
      }
      return response.json()
    })
    .then(response => {
      let temp = Math.round(response.current.temp_c)
      let icon = response.current.condition.icon
      let cidade = response.location.name

      mostraTempo(icon, temp, cidade)
    })
}


function buscaEstado(lat, long) {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}`)
      .then((response) => {
          return response.json()
      })
      .catch((error) => {
        alert(`Error: ${error.message}`)
      })
      .then((response) => {
        let estado = response.features[0].properties.address['ISO3166-2-lvl4']
        console.log(response)
        mostraCidade(estado)
          
      })

  // let estados = [
  //   { estado: 'Acre', sigla: 'AC' },
  //   { estado: 'Alagoas', sigla: 'AL' },
  //   { estado: 'Amapá', sigla: 'AP' },
  //   { estado: 'Amazonas', sigla: 'AM' },
  //   { estado: 'Bahia', sigla: 'BA' },
  //   { estado: 'Ceará', sigla: 'CE' },
  //   { estado: 'Distrito Federal', sigla: 'DF' },
  //   { estado: 'Espírito Santo', sigla: 'ES' },
  //   { estado: 'Goías', sigla: 'GO' },
  //   { estado: 'Maranhão', sigla: 'MA' },
  //   { estado: 'Mato Grosso', sigla: 'MT' },
  //   { estado: 'Mato Grosso do Sul', sigla: 'MS' },
  //   { estado: 'Minas Gerais', sigla: 'MG' },
  //   { estado: 'Pará', sigla: 'PA' },
  //   { estado: 'Paraíba', sigla: 'PB' },
  //   { estado: 'Paraná', sigla: 'PR' },
  //   { estado: 'Pernambuco', sigla: 'PE' },
  //   { estado: 'Piauí', sigla: 'PI' },
  //   { estado: 'Rio de Janeiro', sigla: 'RJ' },
  //   { estado: 'Rio Grande do Norte', sigla: 'RN' },
  //   { estado: 'Rio Grande do Sul', sigla: 'RS' },
  //   { estado: 'Rondônia', sigla: 'RO' },
  //   { estado: 'Roraíma', sigla: 'RR' },
  //   { estado: 'Santa Catarina', sigla: 'SC' },
  //   { estado: 'Sao Paulo', sigla: 'SP' },
  //   { estado: 'Sergipe', sigla: 'SE' },
  //   { estado: 'Tocantins', sigla: 'TO' },
  // ]
  // let eBrasil = false
  // let estadoBrasil;

  // for (let i = 0; i < estados.length; i++) {
  //   if (estados[i].estado == regiao) {
  //     estadoBrasil = estados[i].sigla
  //     eBrasil = true
  //   }
  // }

  // if (eBrasil) {
  //   return estadoBrasil
  // } else {
  //   return regiao
  // }
}

function mostraCidade(estado){
  if(estado != undefined){
    let pegaEstado = estado.split('-')
    estadoAtual.innerHTML = ` - ${pegaEstado[1]}`
  }
}


function mostraTempo(icone, temp, cidade) {
  temperatura.innerHTML = `${temp}º`
  iconeTempo.src = icone
  cidadeAtual.innerHTML = cidade
}

