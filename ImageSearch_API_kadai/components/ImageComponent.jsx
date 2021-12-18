// 画像コンポーネント
const ImageComponent = (props) => {
  const { url, name, imageId } = props;

  return (
    <img
      src={url}
      alt={name}
      title={name}
      imageid={imageId}
      width="100%"
      height="100%"
    />
  );
};

window.ImageComponent = ImageComponent;
