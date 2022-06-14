import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as Logo } from './../../../assets/crown.svg';

// Módulos de SASS -> Los archivos de estilos se convierten en un objeto
import styles from './Navbar.module.scss';

const Navbar = () => {
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
          <Link className={styles.navbarLink} to="/acceder">
            Acceder
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
