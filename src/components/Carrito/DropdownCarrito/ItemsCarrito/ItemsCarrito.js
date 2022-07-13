import './ItemsCarrito.scss';

const ItemsCarrito = ({ item }) => {
  const { nombre, precio, cantidad, imagenUrl } = item;
  return (
    <div className="contenedor-item-carrito">
      <img src={imagenUrl} alt={nombre} />
      <div className="texto-item-carrito">
        <h3>{nombre}</h3>
        <span>{`${cantidad} x ${precio}`}</span>
      </div>
    </div>
  );
};

export default ItemsCarrito;
