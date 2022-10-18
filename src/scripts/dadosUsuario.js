const button = document.querySelector('.input-button');
const inputUsuario = document.querySelector('#usuario')
const inputSenha = document.querySelector('#senha')
const mensagemError = document.querySelector('.form__login-error')

//-----------------------------------LocalStorage-------------------------------------------------
const getUsuarios = () => JSON.parse(localStorage.getItem('bdUsuarios')) ?? [];
const setUsuarios = (bdUsuarios) => { localStorage.setItem('bdUsuarios', JSON.stringify(bdUsuarios)) }
//-------------------------------------------------------------------------------------------------


function recebeDadosUsuario(event) {
  event.preventDefault()

  let bdUsuario = {};
  let nameUsuario = inputUsuario.value.toLowerCase();
  let senhaUsuario = inputSenha.value.toLowerCase();

  if ((nameUsuario != 'admin.admin.pb@compasso.com.br' || senhaUsuario != 'admin')) {
    inputUsuario.style.borderColor = '#E9B425';
    inputSenha.style.borderColor = '#E9B425';
    mensagemError.style.visibility = 'visible'
    //Se o usuario e a senha for incorretaxx'
  } else {
    bdUsuario = {
      usuario: nameUsuario,
      senha: senhaUsuario
    }//Salva os dados do obejto;
    setUsuarios(bdUsuario)//Salva o obejeto no LocalStorage
    window.location.replace('./src/pages/home.html')
  }
}

function moveIcone() {
  const label = document.querySelectorAll('.form__login-group_label')
  //Se o input tiver algo digitado, adicina a classe de animação dos ícones

  if (usuario.value.length > 0) {
    label[0].classList.add('animation')
  } else {
    label[0].classList.remove('animation')
  }

  if (senha.value.length > 0) {
    label[1].classList.add('animation')
  } else {
    label[1].classList.remove('animation')
  }
}

function usuarioConectado() {
  //Pega o usuario que está no localStorage e adiciona no campo de usuario e senha;
  const usuarios = getUsuarios();

  if (!(usuarios.usuario == undefined && usuarios.senha == undefined)) {
    inputSenha.value = usuarios.senha
    inputUsuario.value = usuarios.usuario
    moveIcone()
  }
};



button.addEventListener('click', recebeDadosUsuario)
usuario.addEventListener('input', moveIcone)
senha.addEventListener('input', moveIcone)
usuarioConectado()