import styles from "./styles.module.css";

export const ModoPreparo = ({ instrucoes }) => {
    return (
        <div className={styles.preparo}>
                <h2>Instructions</h2>
                <p>{ instrucoes }</p>
            </div>
    );
};