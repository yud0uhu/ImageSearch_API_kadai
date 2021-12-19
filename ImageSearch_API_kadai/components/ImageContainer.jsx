// 画像表示コンテナコンポーネント
const ImageContainer = (props) => {
  const {imageList} = props;
  console.log(imageList)

  // ========== TODO: createImageElement()を実行してImageComponentの配列をimageElementListへ格納する処理（※一旦空の配列を代入しているので正しい値を代入して下さい） ==========
  // imageListは20枚毎の画像リストのため、繰り返し処理でImageComponentを生成する
  // const imageElementList = [];

  // createImageElementは20回呼ばれる
  // imageElementListにはいる

  // 20個の画像が入ったDOM要素がimageElementList
  // ここで最終的なDOMをreturnする

  // const imageElementList = imageList.map(image=>createImageElement(image,imageList[0]));
  const imageElementList = imageList.map(( image,index ) =>
    createImageElement(image, index)
  );
  return <div style={containerStyle}>{imageElementList}</div>;
};

// ========== TODO: 画像情報からImageComponentを定義して返却する処理 ==========
// pタグ内部のImageComponentに適切なpropsを渡す
// pタグ → figureタグに変更
const createImageElement = (image, index) => {
  return (
    <figure style={boxStyle} key={index}>
      <ImageComponent key={index} url={image.url} name={image.file_name} imageId={image.id} />
    </figure>
  );
};

// 画像コンテナのスタイル
const containerStyle = {
  width: '100%',
  height: '210px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
};

// 画像を囲うpタグのスタイル
// (<p> → <figure>)
const boxStyle = {
  width: '10%',
  height: '50%',
  margin: 0,
  padding: '1px'
};

window.ImageContainer = ImageContainer;
