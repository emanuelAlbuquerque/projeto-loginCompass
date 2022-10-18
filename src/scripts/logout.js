const button_logout = document.querySelector('#logout')
const modal_logout = document.querySelector('#alert_modal_logout')
const logout_confirmar = document.querySelector('#logout_confirmar')
const logout_negar = document.querySelector('#logout_negar')
const logout_fechar = document.querySelector('#modal_fechar')


button_logout.addEventListener('click', () => {
  modal_logout.style.display = 'flex'//Se ele clicar em logOut aparece o modal
})

logout_confirmar.addEventListener('click', () => {
  window.location.replace('../../index.html')
})

logout_negar.addEventListener('click', () => {
  localStorage.removeItem('bdUsuarios')//Remove os usuarios do banco de dados
  window.location.replace('../../index.html')
})

logout_fechar.addEventListener('click', () => {
  modal_logout.style.display = 'none'
})

