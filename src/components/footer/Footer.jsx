import styles from "./Footer.module.css";
import logo from "../../assets/logoSRP2.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>Quem somos ➜</p>
      </div>

      <div className={styles.center}>
        <img
          src={logo}
          alt="Logo SaborRei"
          className={styles.logo}
        />

        <p>© Grupo 2 - Serratec</p>
      </div>

     <div className={styles.right}>
   <FaFacebookF />
   <FaInstagram />
   <FaTwitter />
   <FaYoutube />
</div>
    </footer>
  );
}

export default Footer;