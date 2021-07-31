export function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function appendCommentToDOM(container, comment, isprepend) {
  const html = `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${escape(comment.nickname)} <span class="text-secondary">${comment.created_at}</span></h5>
      <p class="card-text">${escape(comment.content)}</p>
    </div>
  </div>
  `
  if (isprepend) {
    container.prepend(html)
  } else {
    container.append(html)
  }
}

export function appendStyle(cssTemplate) {
  const styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  styleElement.appendChild(document.createTextNode(cssTemplate))
  document.head.appendChild(styleElement)
}

export function nowDate() {
  const time = new Date()
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
