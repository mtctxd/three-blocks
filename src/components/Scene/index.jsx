import { useEffect, useRef } from 'react';
import MainPlane from './MainPlane';
import PlaneItem from './PlaneItem';

const Scene = ({ fetchedData }) => {
  return (
    <>
      <MainPlane fetchedData={fetchedData}></MainPlane>
      {fetchedData.items.map((figure, index) => (
        <PlaneItem figure={figure} key={figure.id} index={index} />
      ))}
    </>
  );
};

export default Scene;
