import { useState } from "react";
import styles from "./LoginForm.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import logo from "../../assets/logoSRP2.png";
import Logo from "../LogoSRP2/Logo";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const usuarioTeste = {
    email: "teste@gmail.com",
    senha: "123456",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setErro("Preencha todos os campos");
      setSucesso("");
      return;
    }

    if (!email.includes("@")) {
      setErro("Digite um email válido");
      setSucesso("");
      return;
    }

    if (
      email !== usuarioTeste.email ||
      senha !== usuarioTeste.senha
    ) {
      setErro("Email ou senha inválidos");
      setSucesso("");
      return;
    }

    setErro("");
    setSucesso("Login realizado com sucesso!");

    console.log({
      email,
      senha,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Logo
          src={logo}
          alt="SaborRei"
          tamanho="255px"
        />

        <h1>Login</h1>

        <p className={styles.subtitulo}>
          Bem-vindo ao SaborREI
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>

          <input
            type="email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErro("");
              setSucesso("");
            }}
          />

          <label>Senha</label>

          <div className={styles.senhaContainer}>
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="********"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                setErro("");
                setSucesso("");
              }}
            />

            <button
              type="button"
              className={styles.olho}
              onClick={() =>
                setMostrarSenha(!mostrarSenha)
              }
            >
              {mostrarSenha ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {erro && (
            <p className={styles.erro}>
              {erro}
            </p>
          )}

          {sucesso && (
            <p className={styles.sucesso}>
              {sucesso}
            </p>
          )}

          <button
          type="submit"
          className={styles.botaocerto}
          >
              Entrar
             </button>

             <p className={styles.cadastroLink}>
  Sem conta?{" "}
  <span>
    Criar aqui
  </span>
</p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;