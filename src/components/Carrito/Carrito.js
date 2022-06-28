import { useContext } from 'react';

import { CarritoContext } from '../../contexts/carrito';
import { ReactComponent as LogoCarrito } from '../../assets/carrito.svg';

import './Carrito.scss';

const Carrito = () => {
  const { mostrarCarrito, setMostrarCarrito } = useContext(CarritoContext);

  const handleOnClick = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div className="contenedor-carrito" onClick={handleOnClick}>
      <LogoCarrito className="logo-carrito" />
      <span className="contador-carrito">0</span>
    </div>
  );
};

export default Carrito;
