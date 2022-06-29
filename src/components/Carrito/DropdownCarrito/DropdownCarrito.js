import { useContext } from 'react';

import { CarritoContext } from '../../../contexts/carrito';
import Button from '../../../layouts/Button/Button';

import './DropdownCarrito.scss';

const DropdownCarrito = () => {
  const { itemsCarrito } = useContext(CarritoContext);

  return (
    <div className="contenedor-dropdown">
      <div className="items-carrito">
        {itemsCarrito ? (
          itemsCarrito.map((item) => {
            return <h2>{item.nombre}</h2>;
          })
        ) : (
          <h3>No hay items</h3>
        )}
      </div>
      <Button type="button" text="Pagar" />
    </div>
  );
};

export default DropdownCarrito;
