import styles from "./styles.module.css";

export const ReceitaInfo = ({ receita }) => {
    if (!receita) return null;

    return (
        <div className={styles.informacoes}>
            <div className={styles.imagem}>
                <img src={receita.link_imagem} alt={receita.receita} />
            </div>

            <div className={styles.detalhes}>
                <h1>{receita.receita}</h1>
                <p>
                    <strong>Categoria:</strong> {receita.tipo}
                </p>
            </div>
        </div>
    );
};