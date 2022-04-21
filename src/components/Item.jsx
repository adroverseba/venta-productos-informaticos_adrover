import { Link } from "react-router-dom";

const Item = ({ id, title, stock, description, price, pictureUrl }) => {
  return (
    <div className="card p-3">
      <div className="overflow">
        <img
          src={pictureUrl}
          className=" card-img-top"
          alt="imagen de producto"
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p>price: {price}</p>

        <Link to={`/item/${id}`}>
          <button className="btn btn-outline-primary btn-block">
            Ver Detalle del Producto
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
