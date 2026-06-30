import { useState } from "react";

import BarraDeBusca from "../BarraDeBusca/BarraDeBusca";
import Logo from "../logoSRP2/Logo";

import styles from "./Header.module.css";
import logo from "../../assets/LogoSRP2.png";
import avatar from "../../assets/placeholderteste.png";

import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api"
import { getUsuarioLogado, estaLogado } from "../../services/auth";

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

  //enzo aqui comeca a funcao ja com o bolean
  // (agora centralizado em src/utils/auth.js pra poder ser reaproveitado)
  const usuarioLogado = getUsuarioLogado();

                  // e aqui o bolean  o !!
  const estaLogadoFlag = estaLogado();

  return (
    <>
      <header className={styles.header}>
        <BarraDeBusca />

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
    {estaLogadoFlag ? (
      <>
        <button
          className={styles.botaoSair}
          onClick={() => {
            localStorage.removeItem("usuarioLogado");
            window.location.reload();
          }}
        >
          Sair
        </button>
      </>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
      </>
    )}
  </div>
)}
          </div>

        </nav>
      </header>
    </>
  );
}

export default Header;
