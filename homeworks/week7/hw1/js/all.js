document.querySelector('form').addEventListener('submit', (e) => {
  const values = {}
  const remove = document.querySelectorAll('.notice')
  for (let i = 0; i < remove.length; i++) {
    remove[i].parentElement.removeChild(remove[i])
  }
  let isSuccess = true
  const elements = document.querySelectorAll('.need')
  let typeValue = ''
  const typeElement = document.querySelectorAll('input[name=type]')
  for (let i = 0; i < typeElement.length; i++) {
    if (typeElement[i].checked) {
      typeValue += typeElement[i].value
    }
  }
  const notice = document.createElement('div')
  notice.classList.add('notice')
  notice.innerText = '*未填寫'
  let cloneNotice = notice.cloneNode(true)
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].querySelector('input[type=text]')) {
      values[elements[i].querySelector('input[type=text]').name] = elements[i].querySelector('input[type=text]').value
      if (!elements[i].querySelector('input[type=text]').value) {
        e.preventDefault()
        isSuccess = false
        elements[i].append(cloneNotice)
        cloneNotice = notice.cloneNode(true)
      }
    } else if (elements[i].querySelectorAll('input[type=radio]').length) {
      values[document.querySelector('input[name=type]').name] = typeValue
      if (typeValue === '') {
        elements[i].appendChild(cloneNotice)
        cloneNotice = notice.cloneNode(true)
      }
    }
  }
  if (isSuccess) {
    values[document.querySelector('.form__text__input__needless').name] = document.querySelector('.form__text__input__needless').value
    alert(JSON.stringify(values))
  }
})
