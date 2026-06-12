import styles from "./cardHorizontal.module.css"


function CardHorizontal({ imagem, titulo, descricao }){

    return(
        
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
        
    );
}
export default CardHorizontal