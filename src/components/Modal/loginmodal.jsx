import { useNavigate, useLocation } from "react-router-dom";
import styles from "./loginmodal.module.css";

export default function LoginModal({
  aberto,
  titulo = "Faça login para continuar",
  mensagem = "Você precisa estar logado para adicionar receitas aos favoritos.",
  textoConfirmar = "Fazer login",
  textoCancelar = "Agora não",
  onCancelar,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  if (!aberto) return null;

  const irParaLogin = () => {
    navigate("/login", { state: { from: location.pathname } });
  };

  return (
    <div className={styles.overlay} onClick={onCancelar}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.titulo}>{titulo}</h2>

        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

        <div className={styles.botoes}>
          <button
            type="button"
            className={styles.botaoCancelar}
            onClick={onCancelar}
          >
            {textoCancelar}
          </button>
          <button
            type="button"
            className={styles.botaoConfirmar}
            onClick={irParaLogin}
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
}
