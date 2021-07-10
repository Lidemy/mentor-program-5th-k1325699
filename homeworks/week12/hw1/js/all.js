/* eslint-env jquery */
function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function appendCommentToDOM(container, comment, isprepend) {
  const html = `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${escape(comment.nickname)} <span class="text-secondary">${escape(comment.created_at)}</span></h5>
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
function getComments(before) {
  let url = 'http://mentor-program.co/mtr04group3/k1325699/api_board/api_comments.php?site_key=k1325699'
  if (before) {
    url = `${url}&before=${before}`
  }
  return url
}

let before = null

$(document).ready(() => {
  // 送出
  $('.add-comment-form').submit((e) => {
    e.preventDefault()
    const newComment = {
      site_key: 'k1325699',
      nickname: $('input[name=nickname]').val(),
      content: $('textarea[name=content]').val()
    }
    $.ajax({
      type: 'POST',
      url: 'http://mentor-program.co/mtr04group3/k1325699/api_board/api_add_comment.php',
      data: newComment
    }).done((data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      location.reload()
    })
  })

  // 拿到留言
  $.ajax({ url: 'http://mentor-program.co/mtr04group3/k1325699/api_board/api_comments.php?site_key=k1325699' })
    .done((data) => {
      if (!data.ok) {
        alert(data.message)
        return
      }
      const comments = data.discussions
      for (const comment of comments) {
        appendCommentToDOM($('.comment'), comment)
        before = comment.id
      }
    })
  // 查看更多
  $('.more-comment').click((e) => {
    e.preventDefault()
    $.ajax({ url: getComments(before) })
      .done((data) => {
        if (!data.ok) {
          alert(data.message)
          return
        }
        const comments = data.discussions
        for (const comment of comments) {
          appendCommentToDOM($('.comment'), comment)
          before = comment.id
        }
        if (comments.length < 5) {
          $('.button__row').prop('outerHTML', '<p class="h5 text-center data__bottom">~已到底部~</p>')
        }
      })
  }
  )
})
