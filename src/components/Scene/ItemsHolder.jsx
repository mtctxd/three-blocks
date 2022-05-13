import Item from './Item';

const ItemsHolder = ({ fetchedData }) => {
  const { width, height } = fetchedData;

  return (
    <object3D position={[-width / 2, height / 2, 0]} rotation={[Math.PI, 0, 0]}>
      {fetchedData.items.map((item, index) => (
        <Item item={item} index={index} key={item.id + index}/>
      ))}
    </object3D>
  );
};

export default ItemsHolder;
