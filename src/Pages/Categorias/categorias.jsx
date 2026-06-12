import styles from "./categorias.module.css";
import { CategoriasCard } from "../../components/CategoriasCard";
import { Link } from "react-router-dom";

export const Categorias = () => {
  const getImagem = (nomeArquivo) => {
    return new URL(`../../assets/${nomeArquivo}`, import.meta.url).href;
  };

  return (
    <div className={styles.categoriaspage}>
      <div className={styles.CategoriasFoto}>
        <img
          src={getImagem("Categorias-foto.png")}
          alt="Mesa_Cheia_de_Comida"
        />
      </div>

      <div className={styles.tituloCategorias}>
        <h1>
          <strong> Categorias </strong>
        </h1>
      </div>

      <section className={styles.listaCategorias}>
        {/* <Link to="/pages/listagem" state={{tipoCategoria: salgado}}>*/}
        <CategoriasCard
          src={getImagem("arrozFeijão.png")}
          alt="Picanha"
          nomeCategoria="Salgado"
          cor="#7c65f3"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: agridoce}}>*/}
        <CategoriasCard
          src={getImagem("vegana.png")}
          alt="Salada"
          nomeCategoria="Agridoce"
          cor="#0fd230"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: doce}}>*/}
        <CategoriasCard
          src={getImagem("bolo.png")}
          alt="Bolo de Chocolate"
          nomeCategoria="Doce"
          cor="#33b5fb"
        />
        {/* </Link> */}

        {/* ----- BUSCA! ----- */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: frango}}>*/}
        <CategoriasCard
          src={getImagem("coxadefrango.png")}
          alt="Prato Com Frango"
          nomeCategoria="Carne de Frango"
          cor="#f63c3c"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: sushi}}>*/}
        <CategoriasCard
          src={getImagem("sushi.png")}
          alt="Sushis"
          nomeCategoria="Sushi"
          cor="#ff701e"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: feijoada}}>*/}
        <CategoriasCard
          src={getImagem("diversos.png")}
          alt="Feijoada"
          nomeCategoria="Feijoadas"
          cor="#b77a59"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: risotto}}>*/}
        <CategoriasCard
          src={getImagem("risotto.png")}
          alt="Risottos"
          nomeCategoria="Risotos"
          cor="#fec457"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: pimenta}}>*/}
        <CategoriasCard
          src={getImagem("picante.png")}
          alt="Caldo Apimentado"
          nomeCategoria="Picantes"
          cor="#ff5050"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: queijo}}>*/}
        <CategoriasCard
          src={getImagem("bolinhaQueijo.png")}
          alt="Bolinha de Queijo temperada"
          nomeCategoria="Queijos"
          cor="#e8ff1b"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: pescado}}>*/}
        <CategoriasCard
          src={getImagem("pescado.png")}
          alt="Pescado"
          nomeCategoria="Pescados"
          cor="#10a729"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: pescado}}>*/}
        <CategoriasCard
          src={getImagem("ceviche.png")}
          alt="Ceviche"
          nomeCategoria="Ceviches"
          cor="#fd96f3"
        />
        {/* </Link> */}

        {/* <Link to="/pages/listagem" state={{tipoCategoria: pescado}}>*/}
        <CategoriasCard
          src={getImagem("bisteca.png")}
          alt="Carne Bisteca"
          nomeCategoria="Bistecas"
          cor="#e4a94f"
        />
        {/* </Link> */}
      </section>
    </div>
  );
};

export default Categorias;
