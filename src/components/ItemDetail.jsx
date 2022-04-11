import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (item) => {
    alert(" Tienes seleccionado " + item + "  item ");
  };

  return (
    <div className="container my-5 itemDetail-container">
      {item.name ? (
        <div className="row">
          <div className="col-md-6 order-md-1">
            <img src={item.image[0]} alt={item.name} />
          </div>
          <div className="col-md-6 order-md-2 d-flex flex-md-column justify-content-evenly">
            <h1 className="my-2">{item.name}</h1>
            <p className="my-2 py-2">{item.description}</p>
            <span className="display-6 my-3">${item.cost}</span>
            <p>{item.stock} unidades en stock</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetail;
