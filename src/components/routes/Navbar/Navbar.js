import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as Logo } from './../../../assets/crown.svg';
import { UsuarioContext } from './../../../contexts/usuarios';
import { signOutUsuario } from './../../../utils/firebase/firebase';

// Módulos de SASS -> Los archivos de estilos se convierten en un objeto
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { usuarioLogueado } = useContext(UsuarioContext);

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
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
