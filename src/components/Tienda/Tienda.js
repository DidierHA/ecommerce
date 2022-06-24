import { useContext } from 'react';

import { ProductosContext } from './../../contexts/productos';
import TarjetaProducto from './TarjetaProducto/TarjetaProducto';

import './Tienda.scss';

const Tienda = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <div className="tienda">
      <h2>Tienda</h2>
      <div className="grid-productos">
        {productos.map((producto) => {
          return <TarjetaProducto key={producto.id} producto={producto} />;
        })}
      </div>
    </div>
  );
};

export default Tienda;
