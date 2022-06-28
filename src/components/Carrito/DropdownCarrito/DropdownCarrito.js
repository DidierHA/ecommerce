import Button from '../../../layouts/Button/Button';

import './DropdownCarrito.scss';

const DropdownCarrito = () => {
  return (
    <div className="contenedor-dropdown">
      <div className="items-carrito" />
      <Button type="button" text="Pagar" />
    </div>
  );
};

export default DropdownCarrito;
