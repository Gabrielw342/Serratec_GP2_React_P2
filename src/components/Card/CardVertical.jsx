import styles from "./CardVertical.module.css"
import descubra from "../../assets/descubra.png";

function CardVertical(){

    return(

    <div>

        <div className={styles.card}>

            <div>
                <img className={styles.img2} src={descubra} alt="" />
            </div>

            <div>
                <h2 className={styles.categoria}>Categoria</h2>
            </div>

        </div>
        
    </div>

















    );
}
export default CardVertical