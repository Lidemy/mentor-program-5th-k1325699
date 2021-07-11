/* eslint-env jquery */
export function getComments(apiUrl, siteKey, before, cb) {
  let url = `${apiUrl}api_comments.php?site_key=${siteKey}`
  if (before) {
    url = `${url}&before=${before}`
  }
  $.ajax({ url })
    .done((data) => {
      cb(data)
    })
}

export function addComments(apiUrl, data, cb) {
  $.ajax({
    type: 'POST',
    url: `${apiUrl}api_add_comment.php`,
    data
  }).done((data) => {
    cb(data)
  })
}
