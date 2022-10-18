//------------------------------Varaveis DOM--------------------------------------

const containerHora = document.querySelector('.home__header-hora__titulo');
const containerData = document.querySelector('.home__header-hora__data');

//---------------------------------------------------------------------------------

//---------------------------------Função que gera a hora-----------------------------
const geraHora = () => {
  const date = new Date();
  const hora = date.getHours();
  const minutos = String(date.getMinutes()).padStart(2, '0');
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
//---------------------------------------------dat----------------------------------------------


//--------------------------Chamando as funções----------------------------------
geraHora()
setInterval(geraHora, 1000)
geraData()
// ----------------------------------------------------------------------------------


//----------------Funções aux que tranformam os valores do Date-----------------------
function pegaDiaSemana(date) {
  let diasSemanas = [
    'domindo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado'
  ];

  return diasSemanas[date]
}

function pegaMes(mes) {
  let mesesAno = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]

  return mesesAno[mes]
}
// --------------------------------------------------------------------------