import styles from "./Footer.module.css";
import logo from "../../assets/logoSRP2.png";

import Logo from "../LogoSRP2/Logo";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>Who we are ➜</p>
      </div>

      <Logo
        src={logo}
        alt="Logo SaborRei"
        texto="© Grupo 2 - Serratec"
        tamanho="160px"
      />

      <FooterSocial />
    </footer>
  );
}

export default Footer;