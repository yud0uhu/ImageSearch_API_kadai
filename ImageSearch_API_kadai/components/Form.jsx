// 検索フォームコンポーネント
const Form = (props) => {
  // この順番でpropsを渡してあげる必要がある
  const { onSearch, onChange, onClear, existsImage } = props;

  // ========== TODO: 画面へ描画する文字列とメソッドを定義 ==========
  // existsImageを用いて、画像が表示されている場合はdisplayText = 'クリア'・action = onClearを割り当てる
  
  // const displayText = '検索';
  const displayText = existsImage ? '検索' : 'クリア';
  // const action = onSearch;
  const action = existsImage? onSearch : onClear;

  // ========== TODO: onChange / onClick時の処理を記述する ==========
  return (
    <div style={boxStyle}>
      <form style={formStyle}>
        <input
          id="search-text"
          type="text"
          onChange = {onChange}
          placeholder="最大50文字"
          style={inputStyle}
        />
        <button
          id="form-button"
          onClick = {action}
          type= "button"
          style={buttonStyle}
        >
          {displayText}
        </button>
      </form>
    </div>
  );
};

// 各スタイルの定義
const boxStyle = {
  margin: '18px 0px 0px 90px',
  display: 'flex',
  justifyContent: 'flex-start',
};
const formStyle = {
  width: '500px',
  height: '100%',
  display: 'inline-flex',
};
const inputStyle = {
  height: '45px',
  paddingLeft: '5px',
  borderRadius: '3px',
  fontSize: '16px',
};
const buttonStyle = {
  width: '85px',
  marginLeft: '10px',
  textAlign: 'center',
  color: '#fff',
  background: '#2577bd',
  padding: '10px 5%',
  display: 'inline-block',
  borderRadius: '5px',
  textDecoration: 'none',
};

window.Form = Form;
