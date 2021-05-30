//  新增list
document.querySelector('.add__input').addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    const list = document.createElement('li')
    list.innerHTML = `
    <div class="list__item">            
    <label>
    <input type="checkbox" name="" id="" class="list__item__check">
    <span></span>
    </label>
    ${escapeHtml(e.target.value)}
    </div>
    <a href="#">X</a>
    `
    document.querySelector('ul').appendChild(list)
    e.target.value = ''
  }
})
//  逃避特殊符號
function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
document.querySelector('.app__content').addEventListener('click', (e) => {
  e.preventDefault()
  //  刪除List
  if (e.target.tagName.toLowerCase() === 'a') {
    e.target.parentElement.remove()
    return
  }
  //  完成變化
  if (e.target.classList.contains('list__item__check')) {
    e.target.parentElement.parentElement.classList.toggle('finish')
  }
})
