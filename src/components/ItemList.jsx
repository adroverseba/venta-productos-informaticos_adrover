import Item from "./Item";

const ItemList = (props) => {
  return (
    <>
      {props.items.length > 0 ? (
        props.items.map((item) => (
          <div className="col-md-4">
            <Item
              key={item.id}
              id={item.id}
              title={item.name}
              description={item.description}
              price={item.cost}
              pictureUrl={item.image[0]}
              stock={item.stock}
            />
          </div>
        ))
      ) : (
        <p>Carganto productos...</p>
      )}
    </>
  );
};

export default ItemList;
