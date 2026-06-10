import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";
import cozinhar from "../../assets/cozinhar.png";
import descubra from "../../assets/descubra.png";
import inspire from "../../assets/inspire.png";


function Carousel(){

    const [posicoes, setPosicoes] = useState([cozinhar,descubra,inspire]);

    useEffect(() => {
        
    const intervalo = setInterval(() => {
         
    setPosicoes((anterior) => {

      const novaLista = [...anterior];

      const ultima = novaLista.pop();

      novaLista.unshift(ultima);

      return novaLista;

    });

    }, 7000);

  return () => clearInterval(intervalo);

}, []);
    

    return(

        <div className={styles.carousel}>

            <div className={styles.container}>

            <div className={`${styles.slide} ${styles.esquerda}`}> <img src={posicoes[0]} alt="Descubra novas receitas" /> </div>
            <div className={`${styles.slide} ${styles.centro}`}> <img src={posicoes[1]} alt="Cozinhe com facilidade" /> </div>
            <div className={`${styles.slide} ${styles.direita}`}> <img src={posicoes[2]} alt="Inspire-se na cozinha" /> </div>
            
            </div>
        
        </div>
        
    );
}

export default Carousel;