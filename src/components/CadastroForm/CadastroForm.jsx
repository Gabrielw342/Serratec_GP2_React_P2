import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CadastroForm.module.css";

import logo from "../../assets/LogoSRP2.png";
import Logo from "../logoSRP2/Logo";

function CadastroForm() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [foto, setFoto] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = async (e) => {
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

    try {
      const resposta = await fetch(
        "http://localhost:3001/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome,
            email,
            senha,
            foto: foto || null,
          }),
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      setErro("");
      setSucesso("Cadastro realizado com sucesso!");

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
      setFoto("");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      setErro("Erro ao conectar com o servidor");
      setSucesso("");

      console.error(error);
    }
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

          <label>Foto de Perfil (Opcional)</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const arquivo = e.target.files[0];

              if (!arquivo) return;

              const leitor = new FileReader();

              leitor.onloadend = () => {
                setFoto(leitor.result);
              };

              leitor.readAsDataURL(arquivo);
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
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CadastroForm;