import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";



function Carousel({ imagens }) {

  const [posicoes, setPosicoes] = useState(() => [...imagens]);

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

  return (

    <div className={styles.carousel}>

      <div className={styles.container}>

        <div className={`${styles.slide} ${styles.esquerda}`}>
          <img src={posicoes[0]} alt="" />
        </div>

        <div className={`${styles.slide} ${styles.centro}`}>
          <img src={posicoes[1]} alt="" />
        </div>

        <div className={`${styles.slide} ${styles.direita}`}>
          <img src={posicoes[2]} alt="" />
        </div>

      </div>

    </div>

  );
}

export default Carousel;