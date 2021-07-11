export function getForm(formClassName, commentsClassName, loadMoreClassName) {
  return `
  <div>
    <form action="api_add_comment.php" method="POST" class="${formClassName}">
    <div class="form-group">
      <label>暱稱</label>
      <input type="text" class="form-control" name ="nickname">
    </div>
    <div class="form-group">
      <label>留言內容</label>
      <textarea class="form-control" rows="3" name="content"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">送出</button>
    </form>
    <div class="${commentsClassName}">
    </div>
    <div class="row button__row">
    <button type="button" class="btn btn-primary col-2 offset-sm-5 ${loadMoreClassName}">載入更多</button>
  </div>`
}
export const cssTemplate = `
  .card,.data__bottom, .more-comment{
    margin-top: 10px;
  }
`
