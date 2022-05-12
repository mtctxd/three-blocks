import { useEffect, useRef } from 'react';

const PlaneItem = ({ figure, index }) => {
  const itemRef = useRef();
  const { height, width, x, y, color, rotation } = figure;

  const validateColor = (color) => {
    let result = color;

    if (!/^#[0-9A-F]{6}$/i.test(result)) {
      result = result.split('');

      if (result[0] !== '#') {
        result.unshift('#');
      }

      const check = 7 - result.length;

      if (check > 0) {
        for (let i = result.length; i < 7; i++) {
            result[i] = 0
        }
      }

      result = result.join('');
      console.log(`color: ${color} result: ${result} check: ${check}`);
    }

    return result.toString(16);
  };

  const validColor = validateColor(color);

  useEffect(() => {
    itemRef.current.position.x = x;
    itemRef.current.position.y = y;
    itemRef.current.position.z = 2 * index;
    itemRef.current.rotation.z = (Math.PI / 180) * rotation;
  });

  return (
    <mesh ref={itemRef}>
      <boxGeometry attach="geometry" args={[height, width, 1]} />
      <meshPhongMaterial attach="material" emissive={validColor} />
    </mesh>
  );
};

export default PlaneItem;
