import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import setCameraHeight from '../features/setCameraHeight';
import Scene from './Scene/Scene';

const Canva = ({ fetchedData }) => {
  const { height, width } = fetchedData;
  const widerPart = height > width ? height : width;
  const cameraDistance = setCameraHeight(widerPart);

  return (
    <div className='canva'>
      <Canvas
        camera={{
          position: [50, 0, cameraDistance],
          far: cameraDistance + widerPart,
        }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <OrbitControls />
        <Scene fetchedData={fetchedData} />
      </Canvas>
    </div>
  );
};

export default Canva;
