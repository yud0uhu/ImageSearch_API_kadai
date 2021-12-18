// 画像データ取得時に使用するAPIキー
const API_KEY = 'DZZ5OX8zgxkD0fpFX3XDh7lGXBDUL1Ms';

// 文字列による検索の場合：search_by_textを末尾に付与
// 画像IDによる検索の場合：search_by_imageを末尾に付与
const END_POINT = 'https://api.a3rt.recruit.co.jp/image_search/v1/search_by_image';

// ========== TODO: 画像データ取得処理 ==========
// ajax等を用いてリクエストを送信し、成功時はhandleChangeImageState()を呼び出す
const sendAction = (handleChangeImageState, param, query) => {
  // テキストが空の場合は処理しない
  if (query == '') {
    return;
  }

//  ここに処理を記述
const imageLists = [];
  $.ajax({
    url: END_POINT,
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    data: encodeURI('apikey=' + API_KEY + '&query=' + $('#search-text').val()),
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    timeout: 5000,
    xhrFields: {
      withCredentials: true
    },
  }).done(function (data, textStatus, jqXHR) {
    // ここでImageContainerにpropsを渡す
    imageLists.push(data.result['img']);
    ImageContainer(imageLists);
  });


  $('#send_btn').on('click', function () {
    sendAction();
  })

};

window.sendAction = sendAction;
