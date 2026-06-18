import styles from "./ConfirmModal.module.css";

export default function ConfirmModal({
  aberto,
  titulo = "Confirmar ação",
  mensagem,
  textoConfirmar = "Sim",
  textoCancelar = "Não",
  onConfirmar,
  onCancelar,
}) {
  if (!aberto) return null;
  // comentario para commit
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
            onClick={onConfirmar}
          >
            {textoConfirmar}
          </button>
        </div>
      </div>
    </div>
  );
}