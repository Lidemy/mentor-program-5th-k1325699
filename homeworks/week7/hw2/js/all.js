const element = document.querySelector('.question')
element.addEventListener('click', (e) => {
  if (e.target.closest('li')) {
    remove(e.target)
    e.target.closest('li').lastChild.previousSibling.classList.add('open')
  }
})

function remove(element) {
  const Anster = element.closest('li').lastChild.previousSibling
  if (!Anster.classList.contains('open')) {
    const remove = document.querySelectorAll('.question p')
    for (let i = 0; i < remove.length; i++) {
      remove[i].classList.remove('open')
    }
  }
}
