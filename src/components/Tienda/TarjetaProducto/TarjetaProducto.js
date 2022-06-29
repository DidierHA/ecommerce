import { useContext } from 'react';

import { CarritoContext } from '../../../contexts/carrito';
import Button from '../../../layouts/Button/Button';

import './TarjetaProducto.scss';

const TarjetaProducto = ({ producto }) => {
  const { nombre, imagenUrl, precio } = producto;
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="contenedor-producto">
      <img src={imagenUrl} alt={nombre} />
      <div className="footer-producto">
        <span>{nombre}</span>
        <span>₡{precio}</span>
      </div>
      <Button
        type="button"
        text="Agregar al carrito"
        onClick={() => agregarAlCarrito(producto)}
      />
    </div>
  );
};

export default TarjetaProducto;
