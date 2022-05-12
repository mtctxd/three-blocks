import { useEffect, useRef } from 'react';
import validateColor from '../../features/validateColor';

const PlaneItem = ({ figure, index }) => {
  const itemRef = useRef();
  const { height, width, x, y, color, rotation } = figure;

  const validColor = validateColor(color);

  useEffect(() => {
    itemRef.current.position.x = x;
    itemRef.current.position.y = y;
    itemRef.current.position.z = 2 * index;
    itemRef.current.rotation.z = (Math.PI / 180) * rotation;
    console.log(`rotation: ${rotation} |||| calculated: ${(Math.PI / 180) * rotation}`);
  }, []);

  return (
    <mesh ref={itemRef}>
      <planeGeometry attach="geometry" args={[height, width]} />
      <meshPhongMaterial attach="material" emissive={validColor} />
    </mesh>
  );
};

export default PlaneItem;
