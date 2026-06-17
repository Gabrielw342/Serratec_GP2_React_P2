import { useState } from "react";

import SearchBar from "../BarraDeBusca/BarraDeBusca";
import Logo from "../LogoSRP2/Logo";

import styles from "./Header.module.css";
import logo from "../../assets/logoSRP2.png";
import avatar from "../../assets/placeholderteste.jpeg";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {

  const [menuAberto, setMenuAberto] = useState(false);

  const usuarioLogado = JSON.parse(
    localStorage.getItem("usuarioLogado")
  );

  return (
    <>
      <header className={styles.header}>
        <section className={styles.searchContainer}>
          <SearchBar />
        </section>

        <section className={styles.logoContainer}>
          <Logo
            src={logo}
            alt="SaborRei"
            tamanho="225px"
          />
        </section>

        <nav className={styles.nav}>
          <Link to="/">Início</Link>
          <Link to="/categoria">Categorias</Link>
          <Link to="/receita/1">Surprenda-me</Link>
          <Link to="/favoritos">Favoritos</Link>

          <FaStar className={styles.star} />

          <div className={styles.avatarContainer}>
            <img
              src={
                usuarioLogado?.foto
                  ? usuarioLogado.foto
                  : avatar
              }
              alt="Usuário"
              className={styles.avatar}
              onClick={() => setMenuAberto(!menuAberto)}
            />

            {menuAberto && (
              <div className={styles.menuUsuario}>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
              </div>
            )}
          </div>

        </nav>
      </header>
    </>
  );
}

export default Header;