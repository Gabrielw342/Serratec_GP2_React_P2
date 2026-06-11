import styles from "./styles.module.css";

export const ReceitaInfo = ({receita}) => {
    if (!receita) return null;
    
    return(
        <div className={styles.informacoes}>
        <div className={styles.imagem}>
            <img src={receita.strMealThumb} alt={receita.strMeal} />
        </div>

        <div className={styles.detalhes}>
            <h1>{receita.strMeal}</h1>
            <p>
                <strong>Category:</strong> {receita.strCategory}
            </p>
            
            <p>
                <strong>Origin Country:</strong> {receita.strArea}
            </p>
            
            <p>
                <strong>Tags:</strong> {receita.strTags}
            </p>
        </div>
    </div>
    );
};