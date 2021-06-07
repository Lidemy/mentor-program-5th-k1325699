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
    <p title="${escapeHtml(e.target.value)}">${escapeHtml(e.target.value)}</p>
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
  //  刪除List
  if (e.target.tagName.toLowerCase() === 'a') {
    e.preventDefault()
    e.target.parentElement.remove()
    return
  }

  //  完成變化
  if (e.target.parentElement.tagName.toLowerCase() === 'label' && e.target.tagName.toLowerCase() === 'span') {
    e.target.parentElement.parentElement.classList.toggle('finish')
  }
})
