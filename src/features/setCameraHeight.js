const setCameraHeight = (catet, fov) => {
  const hipotenuseLength = catet / Math.cos((Math.PI / 180) * fov);
  const cameraHeight = Math.sqrt(hipotenuseLength ** 2 - catet ** 2);

  return cameraHeight;
};

export default setCameraHeight;