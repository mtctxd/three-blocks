const setCameraHeight = (widerPart) => {
  return (widerPart / 2) * Math.cos((Math.PI / 180) * 15) * 1.5;;
};

export default setCameraHeight;