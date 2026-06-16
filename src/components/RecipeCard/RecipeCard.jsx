import styles from './RecipeCard.module.css'

function RecipeCard({ imagem, nome, onClick }) {
    return(
        <div className={styles.card} onClick={onClick}>
            <img className={styles.img} src={imagem} alt={nome} />
            <div className={styles.info}>
                <h2 className={styles.nome}>{nome}</h2>
            </div>
        </div>
    )
}

export default RecipeCard