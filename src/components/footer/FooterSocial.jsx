import styles from "./FooterSocial.module.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

function FooterSocial() {
  return (
    <div className={styles.right}>
      <FaFacebookF />
      <FaInstagram />
      <FaTwitter />
      <FaYoutube />
    </div>
  );
}

export default FooterSocial;