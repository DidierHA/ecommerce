import { useContext } from 'react';

import { CarritoContext } from '../../contexts/carrito';

const Pagar = () => {
  const { itemsCarrito, agregarAlCarrito, eliminarDelCarrito } =
    useContext(CarritoContext);
  return (
    <div>
      {itemsCarrito.map((item) => {
        const { id, nombre, cantidad, precio } = item;
        return (
          <div key={id}>
            <h2>{nombre}</h2>
            <h3>{cantidad}</h3>
            <h3>{precio}</h3>
            <button onClick={() => agregarAlCarrito(item)}>+</button>
            <button onClick={() => eliminarDelCarrito(item)}>-</button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagar;
