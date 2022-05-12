import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import setCameraHeight from '../features/setCameraHeight';
import Scene from './Scene';

const Canva = ({ fetchedData }) => {
  const { height, width } = fetchedData;
  const widerPart = height > width ? height : width;
  const cameraDistance = setCameraHeight(widerPart / 2, 75) / 3 + 100;

  return (
    <Canvas
      camera={{
        position: [0, 0, cameraDistance],
        far: cameraDistance + 1000
      }}
    >
      <OrbitControls />
      <Scene fetchedData={fetchedData} />
    </Canvas>
  );
};

export default Canva;
