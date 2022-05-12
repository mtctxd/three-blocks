import { useEffect, useRef, useState } from 'react';
import validateColor from '../../features/validateColor';

const Scene = ({ fetchedData }) => {
  const { width, height } = fetchedData;

  return (
    <>
      <mesh>
        <boxGeometry attach="geometry" args={[width, height]} />
        <meshPhongMaterial attach="material" />
        <object3D position={[-width / 2, height / 2, 0]} rotation={[Math.PI, 0, 0]}>
          {fetchedData.items.map((item, index) => {
            const { id, width, height, color, x, y, rotation } = item;
            return (
              <mesh key={id + index} position={[x, y, -index * 8 - 8]} rotation={[0, 0, Math.PI / 180 * rotation]}>
                <boxGeometry attach="geometry" args={[width, height]} />
                <meshPhongMaterial
                  attach="material"
                  emissive={validateColor(color)}
                />
              </mesh>
            );
          })}
        </object3D>
      </mesh>
    </>
  );
};

export default Scene;
