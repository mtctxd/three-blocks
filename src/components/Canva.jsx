import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import setCameraHeight from '../features/setCameraHeight';
import Scene from './Scene/Scene';

const Canva = ({ fetchedData }) => {
  const { height, width } = fetchedData;
  const widerPart = height > width ? height : width;
  const cameraDistance = setCameraHeight(widerPart / 2, 75) / 3 + 100;

  return (
    <div
        style={{
            // width: '100%',
            // height: '100%',
            flexGrow: 1
        }}
    >
      <Canvas
        camera={{
          position: [0, 0, cameraDistance],
          far: cameraDistance + 1000,
        }}
        style={{
        //   position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <OrbitControls />
        <Scene fetchedData={fetchedData} />
      </Canvas>
    </div>
  );
};

export default Canva;
