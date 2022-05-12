import ItemsHolder from './ItemsHolder';

const Scene = ({ fetchedData }) => {
  const { width, height } = fetchedData;

  return (
    <>
      <mesh>
        <boxGeometry attach="geometry" args={[width, height]} />
        <meshPhongMaterial attach="material" emissive={0x555555} />
        <ItemsHolder fetchedData={fetchedData}/>
      </mesh>
    </>
  );
};

export default Scene;
