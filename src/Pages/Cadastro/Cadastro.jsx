import styles from "./Cadastro.module.css";
import CadastroForm from "../../components/CadastroForm/CadastroForm";

function Cadastro() {
  return (
    <main className={styles.cadastroPage}>
      <CadastroForm />
    </main>
  );
}

export default Cadastro;