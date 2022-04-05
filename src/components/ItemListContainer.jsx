import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const onAdd = (item) => {
    alert(" Tienes seleccionado " + item + "  item ");
  };

  return (
    <div>
      <h2>Hola mundo!</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
