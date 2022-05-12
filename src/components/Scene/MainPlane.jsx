import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const MainPlane = ({ fetchedData, children }) => {
  const { height, width } = fetchedData;
  const widerPart = height > width ? height : width;

  const mainPlaneRef = useRef();

    useEffect(() => {
        // mainPlaneRef.current.rotation.z = Math.PI / 2;
        console.log(mainPlaneRef.current);
    }, []);

  return (
    <object3D ref={mainPlaneRef}>
      <mesh>
        <planeGeometry attach="geometry" args={[height, width]} />
        <meshPhongMaterial attach="material" emissive={'red'}/>
        {children}
      </mesh>
    </object3D>
  );
};

export default MainPlane;
