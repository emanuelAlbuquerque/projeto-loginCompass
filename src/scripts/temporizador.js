const segundos = document.querySelector('#segundos');
const modal = document.querySelector('#alert_modal');
const buttonConfirmar = document.querySelector('#button_confirmar');
const buttonNegar = document.querySelector('#button_negar');

var totalSegundos = 599


function temporizador() {
  segundos.innerHTML = totalSegundos;

  if (totalSegundos == 0) {
    modal.style.display = 'flex'

    buttonConfirmar.addEventListener('click', () => {
      window.location.replace('../../index.html')
      localStorage.clear()
    })

    buttonNegar.addEventListener('click', () => {
      window.location.reload();
    })

    modal_logout.style.display = 'none'

    clearInterval(interval)
  }
  totalSegundos--
}

let interval = setInterval(temporizador, 1000)
