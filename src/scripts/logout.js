const button_logout = document.querySelector('#logout')
const modal_logout = document.querySelector('#alert_modal_logout')
const logout_confirmar = document.querySelector('#logout_confirmar')
const logout_negar = document.querySelector('#logout_negar')
const logout_fechar = document.querySelector('#modal_fechar')
let stopwatch;

button_logout.addEventListener('click', () => {
  modal_logout.style.display = 'flex'
})

logout_confirmar.addEventListener('click', () => {
  window.location.replace('../../index.html')
})

logout_negar.addEventListener('click', () => {
  localStorage.clear()
  window.location.replace('../../index.html')
})

logout_fechar.addEventListener('click', () => {
  modal_logout.style.display = 'none'
})

