import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as Logo } from './../../../assets/crown.svg';
import { UsuarioContext } from './../../../contexts/usuarios';
import { CarritoContext } from '../../../contexts/carrito';
import { signOutUsuario } from './../../../utils/firebase/firebase';

import Carrito from './../../Carrito/Carrito';

// Módulos de SASS -> Los archivos de estilos se convierten en un objeto
import styles from './Navbar.module.scss';
import DropdownCarrito from '../../Carrito/DropdownCarrito/DropdownCarrito';

const Navbar = () => {
  const { usuarioLogueado } = useContext(UsuarioContext);
  const { mostrarCarrito } = useContext(CarritoContext);

  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
        <div className={styles.navbarLinks}>
          <Link className={styles.navbarLink} to="/tienda">
            Tienda
          </Link>
          {usuarioLogueado ? (
            <span className={styles.navbarLink} onClick={signOutUsuario}>
              Salir
            </span>
          ) : (
            <Link className={styles.navbarLink} to="/acceder">
              Acceder
            </Link>
          )}
          <Carrito />
        </div>
        {mostrarCarrito && <DropdownCarrito />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
