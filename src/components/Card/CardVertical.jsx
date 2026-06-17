import styles from "./CardVertical.module.css"
import descubra from "../../assets/descubra.png";

function CardVertical({ id }){

    return(

    <div>

        {/* <Link to={`/categorias/${id}`}className={styles.link}> */}
        <div className={styles.card}>

            <div>
                <img className={styles.img2} src={descubra} alt="" />
            </div>

            <div>
                <h2 className={styles.categoria}>Categoria</h2>
            </div>

        </div>
        {/* </Link> */}
    </div>

















    );
}
export default CardVertical