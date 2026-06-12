import { useState } from "react";
import styles from "./CadastroForm.module.css";

import logo from "../../assets/logoSRP2.png";
import Logo from "../LogoSRP2/Logo";

function CadastroForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos");
      setSucesso("");
      return;
    }

    if (!email.includes("@")) {
      setErro("Digite um email válido");
      setSucesso("");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem");
      setSucesso("");
      return;
    }

    setErro("");
    setSucesso("Cadastro realizado com sucesso!");

    console.log({
      nome,
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

        <h1>Cadastro</h1>

        <form onSubmit={handleSubmit}>
          <label>Nome</label>

          <input
            type="text"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              setErro("");
              setSucesso("");
            }}
          />

          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErro("");
              setSucesso("");
            }}
          />

          <label>Senha</label>

          <input
            type="password"
            value={senha}
            onChange={(e) => {
              setSenha(e.target.value);
              setErro("");
              setSucesso("");
            }}
          />

          <label>Confirme a senha</label>

          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => {
              setConfirmarSenha(e.target.value);
              setErro("");
              setSucesso("");
            }}
          />

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
        </form>
      </div>
    </div>
  );
}

export default CadastroForm;