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

      <section className={styles.listaCategorias}>
        <Link to="/pages/listagem" state={{tipoCategoria: "salgado", nomeExibicao:"Salgado"}}>
        <CategoriasCard
          src={getImagem("arrozFeijão.png")}
          alt="Picanha"
          nomeCategoria="Salgado"
          cor="#7c65f3"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria: "agridoce", nomeExibicao:"Agridoce"}}>
        <CategoriasCard
          src={getImagem("vegana.png")}
          alt="Salada"
          nomeCategoria="Agridoce"
          cor="#0fd230"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria: "doce", nomeExibicao:"Doce"}}>
        <CategoriasCard
          src={getImagem("bolo.png")}
          alt="Bolo de Chocolate"
          nomeCategoria="Doce"
          cor="#33b5fb"
        />
        </Link>

        {/* ----- BUSCA! ----- */}

        <Link to="/pages/listagem" state={{tipoCategoria: "/receitas/descricao?descricao=frango&page=1&limit=999", nomeExibicao:"Carne de Frango"}}>
        <CategoriasCard
          src={getImagem("coxadefrango.png")}
          alt="Prato Com Frango"
          nomeCategoria="Carne de Frango"
          cor="#f63c3c"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=sushi&page=1&limit=999", nomeExibicao:"Sushi"}}>
        <CategoriasCard
          src={getImagem("sushi.png")}
          alt="Sushis"
          nomeCategoria="Sushi"
          cor="#ff701e"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=feijoada&page=1&limit=999", nomeExibicao:"Feijoadas"}}>    
        <CategoriasCard
          src={getImagem("diversos.png")}
          alt="Feijoada"
          nomeCategoria="Feijoadas"
          cor="#b77a59"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=risotto&page=1&limit=999", nomeExibicao:"Risotos"}}>
        <CategoriasCard
          src={getImagem("risotto.png")}
          alt="Risottos"
          nomeCategoria="Risotos"
          cor="#fec457"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=pimenta&page=1&limit=999", nomeExibicao:"Picantes"}}>
        <CategoriasCard
          src={getImagem("picante.png")}
          alt="Caldo Apimentado"
          nomeCategoria="Picantes"
          cor="#ff5050"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=queijo&page=1&limit=999", nomeExibicao:"Queijos"}}>
        <CategoriasCard
          src={getImagem("bolinhaQueijo.png")}
          alt="Bolinha de Queijo temperada"
          nomeCategoria="Queijos"
          cor="#e8ff1b"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=pescado&page=1&limit=999", nomeExibicao:"Pescados"}}>
        <CategoriasCard
          src={getImagem("pescado.png")}
          alt="Pescado"
          nomeCategoria="Pescados"
          cor="#10a729"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=ceviche&page=1&limit=999", nomeExibicao:"Ceviches"}}>
        <CategoriasCard
          src={getImagem("ceviche.png")}
          alt="Ceviche"
          nomeCategoria="Ceviches"
          cor="#fd96f3"
        />
        </Link>

        <Link to="/pages/listagem" state={{tipoCategoria:"/receitas/descricao?descricao=bisteca&page=1&limit=999", nomeExibicao:"Bistecas"}}>
        <CategoriasCard
          src={getImagem("bisteca.png")}
          alt="Carne Bisteca"
          nomeCategoria="Bistecas"
          cor="#e4a94f"
        />
        </Link>
      </section>
    </div>
  );
};

export default Categorias;
