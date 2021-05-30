const elements = document.querySelectorAll('.question li')
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', (e) => {
    remove(elements[i])
    e.target.closest('li').lastChild.previousSibling.classList.toggle('open')
  })
}

function remove(element) {
  const Anster = element.closest('li').lastChild.previousSibling
  if (!Anster.classList.contains('open')) {
    const remove = document.querySelectorAll('.question p')
    for (let i = 0; i < remove.length; i++) {
      remove[i].classList.remove('open')
    }
  }
}
