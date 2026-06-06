import styles from "./Header.module.css";
import logo from "../../assets/logoSRP2.png";
import avatar from "../../assets/placeholderteste.jpeg";

import { FaSearch, FaStar } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <button className={styles.searchButton}>
              <FaSearch />
            </button>

            <input
              type="text"
              placeholder=""
              className={styles.search}
            />
          </div>
        </div>

        <div className={styles.logoContainer}>
          <img
            src={logo}
            alt="SaborRei"
            className={styles.logo}
          />
        </div>

        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Receitas</a>
          <a href="#">Categorias</a>
          <a href="#">Favoritos</a>

          <FaStar className={styles.star} />

          <div className={styles.avatarContainer}>
            <img
              src={avatar}
              alt="Usuário"
              className={styles.avatar}
            />
          </div>
        </nav>
      </header>

      <div className={styles.separator}></div>
    </>
  );
}

export default Header;