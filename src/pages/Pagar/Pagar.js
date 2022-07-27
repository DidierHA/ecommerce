import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CarritoContext } from '../../contexts/carrito';
import Button from '../../layouts/Button/Button';

import './Pagar.scss';

const Pagar = () => {
  const {
    itemsCarrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    limpiarDelCarrito,
    totalCarrito,
  } = useContext(CarritoContext);

  let navigate = useNavigate();

  const onClickTienda = () => {
    navigate('/tienda');
  };

  return (
    <div className="contenedor-pagos">
      {itemsCarrito.length > 0 ? (
        <>
          <div className="cabecera-pagos">
            <h2>Mi carrito</h2>
            <Button
              type={'button'}
              text={'Seguir comprando'}
              onClick={onClickTienda}
            />
          </div>
          <div className="tabla-pagos">
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {itemsCarrito.map((item) => {
                  const { id, nombre, cantidad, precio, imagenUrl } = item;
                  return (
                    <tr key={id}>
                      <td className="imagen-producto">
                        <img src={imagenUrl} alt={nombre} />
                      </td>
                      <td>{nombre}</td>
                      <td>
                        <span onClick={() => eliminarDelCarrito(item)}>
                          &#60;
                        </span>
                        {cantidad}
                        <span onClick={() => agregarAlCarrito(item)}>
                          &#62;
                        </span>
                      </td>
                      <td>{precio}</td>
                      <td>
                        <span onClick={() => limpiarDelCarrito(item)}>X</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h3 className="total">Total: ₡{totalCarrito}</h3>
          </div>
        </>
      ) : (
        <div className="vacio">
          <h3>Su carrito está vacío</h3>
          <h4 onClick={onClickTienda}>Volver a la tienda</h4>
        </div>
      )}
    </div>
  );
};

export default Pagar;
