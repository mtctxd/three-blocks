import { Text } from "@react-three/drei";
import validateColor from "../../features/validateColor";

const Item = ({ item, index }) => {
  const { id, width, height, color, x, y, rotation } = item;
  return (
    <mesh
      position={[x, y, -index * 8 - 8]}
      rotation={[0, 0, (Math.PI / 180) * rotation]}
    >
      <boxGeometry attach="geometry" args={[width, height]} />
      <meshPhongMaterial attach="material" emissive={validateColor(color)} />
      <Text
        rotation={[Math.PI, 0, (Math.PI / 180) * rotation]}
        position={[0, 0, -4]}
        fontSize={25}
        color={'black'}
      >
        {`${rotation} °`}
      </Text>
    </mesh>
  );
};

export default Item;
