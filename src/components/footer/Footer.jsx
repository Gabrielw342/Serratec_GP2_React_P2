import styles from "./Footer.module.css";
import logo from "../../assets/LogoSRP2.png";

import Logo from "../logoSRP2/Logo";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <>
      <div className={styles.separator}></div>

        <footer className={styles.footer}>
          <div className={styles.left}>
            <p> Carlos Eduardo: Categoria</p>
            <p> Enzo Costa: categoria home</p>
            <p> Gabriel Ecard: Login e cadastro</p>
            <p> Kenny Robert: Categoria listagem</p>
            <p> Vinicius Lamas: Home</p>
            <p> Phelipe Damasio: Favoritos</p>
            <p> Vitor Ribeiro: Receita especifica</p>
          </div>

          <Logo
            src={logo}
            alt="Logo SaborRei"
            texto="© Grupo 2 - Serratec"
            tamanho="145px"
          />

          <FooterSocial />
      </footer>
    </>
  );
}

export default Footer;