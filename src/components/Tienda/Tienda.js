import { useContext } from 'react';

import { ProductosContext } from './../../contexts/productos';

import './Tienda.scss';

const Tienda = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <div className="tienda">
      <h2>Tienda</h2>
      {productos.map(({ id, nombre }) => {
        return (
          <div key={id}>
            <h3>{nombre}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Tienda;
