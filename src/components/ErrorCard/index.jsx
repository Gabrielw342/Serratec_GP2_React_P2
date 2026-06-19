import styles from "./styles.module.css";
import ImagemErro from "../../assets/ImagemErro.png";

function ErrorCard () {
    return (
        <div className={styles.card}>
            <img 
                src={ImagemErro}
                alt="Imagem de erro"
                className={styles.imagem}
            />
        </div>

    );
}

export default ErrorCard;