import { useState } from "react";
import styles from "./LoginForm.module.css";

import logo from "../../assets/logoSRP2.png";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      senha,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={logo}
          alt="SaborRei"
          className={styles.logo}
        />

        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;