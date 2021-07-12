/* eslint-env jquery */
/* eslint-disable import/prefer-default-export */
import { getComments, addComments } from './api'
import { appendCommentToDOM, appendStyle } from './utils'
import { getForm, cssTemplate } from './templates'

export function init(options) {
  let siteKey = ''
  let apiUrl = ''
  let containerElement = null
  let before = null

  siteKey = options.siteKey
  apiUrl = options.apiUrl

  const loadMoreClassName = `${siteKey}-load-more`
  const commentsClassName = `${siteKey}-comments`
  const loadMoreSelector = `.${loadMoreClassName}`
  const commentsSelector = `.${commentsClassName}`
  const formClassName = `${siteKey}-add-comment-form`
  const formSelector = `.${formClassName}`

  containerElement = $(options.containerSelector)
  containerElement.append(getForm(formClassName, commentsClassName, loadMoreClassName))
  appendStyle(cssTemplate)

  $(formSelector).submit((e) => {
    e.preventDefault()
    const nicknameDOM = $(`${formSelector} input[name=nickname]`)
    const contentDOM = $(`${formSelector} textarea[name=content]`)
    const newComment = {
      site_key: siteKey,
      nickname: nicknameDOM.val(),
      content: contentDOM.val()
    }
    addComments(apiUrl, newComment, (data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      nicknameDOM.val('')
      contentDOM.val('')
      appendCommentToDOM($(commentsSelector), newComment, true)
    })
  })

  // 拿到留言
  getComments(apiUrl, siteKey, before, (data) => {
    if (!data.ok) {
      alert(data.message)
      return
    }
    const comments = data.discussions
    for (const comment of comments) {
      appendCommentToDOM($(commentsSelector), comment)
      before = comment.id
    }
  })
  // 查看更多
  $(loadMoreSelector).click((e) => {
    e.preventDefault()
    getComments(apiUrl, siteKey, before, (data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      const comments = data.discussions
      for (const comment of comments) {
        appendCommentToDOM($(commentsSelector), comment)
        before = comment.id
      }
      if (comments.length < 5) {
        $(loadMoreSelector).parent().prop('outerHTML', '<p class="h5 text-center data__bottom">~已到底部~</p>')
      }
    })
  })
}
