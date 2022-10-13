//------------------------------Varaveis DOM--------------------------------------

const containerHora = document.querySelector('.home__header-hora__titulo');
const containerData = document.querySelector('.home__header-hora__data');

//---------------------------------------------------------------------------------

//---------------------------------Função que gera a hora-----------------------------
const geraHora = () => {
  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();
  containerHora.innerHTML = `${hora}:${minutos}`
}
//------------------------------------------------------------------------------------


//-------------------------------------Função que gera a data------------------------------
const geraData = () => {
  const date = new Date();

  const data = date.getDate()
  const dia = pegaDiaSemana(date.getDay());
  const mes = pegaMes(date.getMonth());
  const ano = date.getFullYear();

  containerData.innerHTML = `${dia}, ${data} de ${mes} de ${ano}`
}
//-------------------------------------------------------------------------------------------


//--------------------------Chamando as funções----------------------------------
geraHora()
setInterval(geraHora, 1000)
geraData()
// ----------------------------------------------------------------------------------


//----------------Funções aux que tranformam os valores do Date-----------------------
function pegaDiaSemana(date) {
  let diaSemana = '';
  date == 0 ? diaSemana = 'domingo' : '';
  date == 1 ? diaSemana = 'segunda-feira' : '';
  date == 2 ? diaSemana = 'terça-feira' : ''
  date == 3 ? diaSemana = 'quarta-feira' : ''
  date == 4 ? diaSemana = 'quinta-feira' : ''
  date == 5 ? diaSemana = 'sexta-feira' : ''
  date == 6 ? diaSemana = 'sábado' : ''

  return diaSemana
}

function pegaMes(mes) {
  let mesAno = '';
  mes == 0 ? mesAno = 'janeiro' : '';
  mes == 1 ? mesAno = 'fevereiro' : '';
  mes == 2 ? mesAno = 'março' : ''
  mes == 3 ? mesAno = 'abril' : ''
  mes == 4 ? mesAno = 'maio' : ''
  mes == 5 ? mesAno = 'junho' : ''
  mes == 6 ? mesAno = 'julho' : ''
  mes == 7 ? mesAno = 'agosto' : ''
  mes == 8 ? mesAno = 'setembro' : ''
  mes == 9 ? mesAno = 'outubro' : ''
  mes == 10 ? mesAno = 'novembro' : ''
  mes == 11 ? mesAno = 'dezembro' : ''

  return mesAno
}

// --------------------------------------------------------------------------