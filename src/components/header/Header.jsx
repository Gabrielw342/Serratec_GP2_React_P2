import { useState } from "react";

import SearchBar from "../BarraDeBusca/BarraDeBusca";
import Logo from "../LogoSRP2/Logo";

import styles from "./Header.module.css";
import logo from "../../assets/logoSRP2.png";
import avatar from "../../assets/placeholderteste.jpeg";

import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api"

function Header() {

  const navigate = useNavigate();

  const irParaReceitaAleatoria = async () => {
    try {
      const response = await api.get("/receitas/todas?page=1&limit=93");
      const receitas = response.data.items;

      if (receitas && receitas.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * receitas.length);
        const receitaAleatoria = receitas[indiceAleatorio];
        navigate(`/receita/${receitaAleatoria.id}`);
      }
    } catch (erro) {
      console.log(erro);
    }
  };

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
          <Link to="/favoritos">Favoritos</Link>
          <button onClick={irParaReceitaAleatoria} className={styles.botaoSurpresa}>Surpreenda-me</button>

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