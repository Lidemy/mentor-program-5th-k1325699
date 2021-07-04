/* eslint-env jquery */
function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function appendList(list) {
  const html = `
<div class="row list__item__row">
  <div class="form-check h1 col-10 offset-1 border rounded  list__item ">
    <input class="form-check-input check__list" type="checkbox" value="">
    <div class="d-flex justify-content-between">
      <p class="form-check-label check__content flex-fill " >${list.val()}</p>
      <button type="button" class="close delete__content" >
        <span class="h1 deleted__mark">&times;</span>
      </button>
    </div>
  </div>
</div>
  `
  $('.list__connect').append(html)
}
function updateCount() {
  $('.uncompleted-count').prop('innerText', uncompletedCount)
}
let uncompletedCount = 0

$(document).ready(() => {
  // 新增list
  $('.add__todo').on('keypress', (e) => {
    if (e.keyCode === 13 && $('.add__todo').val()) {
      appendList($(e.target))
      $('.add__todo').val('')
      uncompletedCount++
      updateCount()
    }
  })
  $('.list__connect').click((e) => {
    const deletedMark = $(e.target).parent()
    // 刪除list
    if (deletedMark.hasClass('delete__content')) {
      if (!deletedMark.parent().siblings().prop('checked')) {
        uncompletedCount--
        updateCount()
      }
      deletedMark.parent().parent().prop('outerHTML', '')
    }
    // 變更選取
    if ($(e.target).hasClass('check__list')) {
      if (!$(e.target).prop('checked')) {
        $(e.target).parent().parent().removeClass('finished')
        uncompletedCount++
      } else {
        $(e.target).parent().parent().addClass('finished')
        uncompletedCount--
      }
      updateCount()
    }
  })
  // 更改todo
  // 變成input形式
  $('.list__connect').on('dblclick', (e) => {
    if ($(e.target).hasClass('check__content')) {
      const html = `<input class=" form-control update__todo form-control-lg" type="text" value="${$(e.target).text()}">`
      $(e.target).parent().prop('innerHTML', html)
    }
  })
  // 更改結果
  $('.list__connect').on('keypress', (e) => {
    if (e.keyCode === 13 && $(e.target).hasClass('update__todo')) {
      const html = `
      <p class="form-check-label check__content flex-fill" >${escape($(e.target).val())}</p>
      <button type="button" class="close delete__content" >
        <span class="h1 deleted__mark">&times;</span>
      </button>
      `
      $(e.target).parent().prop('innerHTML', html)
    }
  })
  // 篩選 todo
  $('.filter__todo').click((e) => {
    e.preventDefault()
    // 顯示全部
    if ($(e.target).hasClass('all__todo')) {
      $('.list__item__row').each(
        (i, el) => {
          $(el).show()
        })
    }
    // 顯示未完成
    if ($(e.target).hasClass('undone__todo')) {
      $('.list__item__row').each(
        () => {
          $('.list__item__row').show()
          $('.list__item__row.finished').hide()
        })
    }
    // 顯示未完成
    if ($(e.target).hasClass('finished__todo')) {
      $('.list__item__row').each(
        () => {
          $('.list__item__row').hide()
          $('.list__item__row.finished').show()
        })
    }
    // 刪除全部
    if ($(e.target).hasClass('clear__all')) {
      $('.list__item__row.finished').each((i, el) => {
        console.log(el)
        $(el).prop('outerHTML', '')
      })
    }
  })
})
