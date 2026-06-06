import styles from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  return (
    <main className={styles.loginPage}>
      <LoginForm />
    </main>
  );
}

export default Login;