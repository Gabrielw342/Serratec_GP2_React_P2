import styles from "./cardHorizontal.module.css"
import descubra from "../../assets/descubra.png";

function CardHorizontal(){

    return(
        
        <div className={styles.container}>
            
            <div className={styles.card}>
                
                <div>
                    <img src={descubra} alt="" />
                </div>

                <div>
                    <h2 className={styles.nomereceita}>Nome da Receita</h2>
                </div>

                <div>
                    <p className={styles.descricao}>Cremoso, envolvente e reconfortante. Esse macarrão ao molho branco é a definição de um abraço em forma de comida.
                        O segredo está no equilíbrio perfeito.</p>
                </div>

            </div>
            
         </div>
        
    );
}
export default CardHorizontal