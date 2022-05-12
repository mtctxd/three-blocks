import { useEffect, useRef, useState } from 'react';
import MainPlane from './MainPlane';
import PlaneItem from './PlaneItem';

const Scene = ({ fetchedData }) => {
  const secondaryRef = useRef();

  useEffect(() => {
    secondaryRef.current.rotation.z = Math.PI / 2;
  }, []);

  return (
    <>
      <MainPlane
        fetchedData={fetchedData}
      >
        <object3D ref={secondaryRef}>
          {fetchedData.items.map((figure, index) => (
            <PlaneItem figure={figure} key={figure.id} index={index} />
          ))}
        </object3D>
      </MainPlane>
    </>
  );
};

export default Scene;
