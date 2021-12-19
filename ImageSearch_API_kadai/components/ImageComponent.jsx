// 画像コンポーネント
const ImageComponent = (props) => {
  const { url, name, imageId, imageAction } = props;
  console.log(imageId)

  return (
    <img
      src={url}
      alt={name}
      title={name}
      imageid={imageId}
      onClick={imageAction.bind(null,imageId)}
      width="100%"
      height="100%"
    />
  );
};

window.ImageComponent = ImageComponent;
