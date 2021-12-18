// 画像データ取得時に使用するAPIキー
const API_KEY = 'DZZ5OX8zgxkD0fpFX3XDh7lGXBDUL1Ms';

// 文字列による検索の場合：search_by_textを末尾に付与
// 画像IDによる検索の場合：search_by_imageを末尾に付与
const END_POINT = 'https://api.a3rt.recruit.co.jp/image_search/v1/';

// ========== TODO: 画像データ取得処理 ==========
// ajax等を用いてリクエストを送信し、成功時はhandleChangeImageState()を呼び出す
const sendAction = (handleChangeImageState, param, query) => {
  // テキストが空の場合は処理しない
  if (query == '') {
    return;
  }

//  ここに処理を記述
  $.ajax({
    url: END_POINT,
    type: 'POST',
    crossDomain: true,
    dataType: 'json',
    data: encodeURI('apikey=' + API_KEY + '&query=' + $('#search-text').val()),
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    timeout: 5000,
    xhrFields: {
      withCredentials: true
    },
  }).done(function (data, textStatus, jqXHR) {
    console.log(data.results[0]['img']);
    // messageLists.push(data.results[0]['img']);
    // kindLists.push(!IS_SEND);
  });

  $('#send_btn').on('click', function () {
    sendAction();
  })

  $('#send_message').keypress(function (e) {
    if (e.which == 13) {
      sendAction();
    }
    return false;
  })
};

window.sendAction = sendAction;
