import styles from "./CardHorizontal.module.css"
import { Link } from "react-router-dom";


function CardHorizontal({ id, imagem, titulo, descricao }){

    return(
        
        <Link to={`/receita/${id}`}className={styles.link}>
        <div className={styles.container}>
            
            <div className={styles.card}>
                
                <div>
                    <img src={imagem} alt={titulo}/>
                </div>

                <div>
                    <h2 className={styles.nomereceita}>{titulo}</h2>
                </div>

                <div>
                    <p className={styles.descricao}>{descricao}</p>
                </div>

            </div>
            
         </div>
        </Link>
    );
}
export default CardHorizontal
