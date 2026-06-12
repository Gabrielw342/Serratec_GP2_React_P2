import { useEffect, useState } from "react";
import styles from './ReceitaEspecifica.module.css';
import { ListaIngredientes } from "../../components/ListaIngredientes";
import { ReceitaInfo } from "../../components/ReceitaInfo";
import { ModoPreparo } from "../../components/ModoPreparo";

export const ReceitaDetails = () => {
    
    /*const [receita,setReceita] = useState(null);*/

    /*receita fícticia para apresentar a página, (excluir quando conectar com API e usar o useState acima) */
    const receita = {
    strMeal: "Salpicão",
    strCategory: "Chicken",
    strArea: "Brazilian",
    strTags: "Christmas, Dinner",
    strInstructions:
        "Misture todos os ingredientes e sirva gelado.",

    strMealThumb:
        "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",

    strIngredient1: "Chicken",
    strMeasure1: "500g",

    strIngredient2: "Carrot",
    strMeasure2: "2",

    strIngredient3: "Mayonnaise",
    strMeasure3: "200g"
};

    if (!receita){
        return <h1>Teste funcionando</h1>
    }

    const getIngredientes = (receita) => {

        /*Método para tranformar os ingredientes e quantidades em um array*/
        const ingredientes = [];

        for (let i = 1; i <= 20; i++) {
            const ingrediente = receita[`strIngredient${i}`];
            const medida = receita[`strMeasure${i}`];

            if (ingrediente && ingrediente.trim()) {
                ingredientes.push({
                    ingrediente,
                    medida: medida?.trim() || ""
                });
            }
        }
        return ingredientes;
    }

    const ingredientes = receita 
    ? getIngredientes(receita)
    :[];

return <div className={styles.receita}>
                <ReceitaInfo receita={receita}/>

                <div className={styles.instrucoes}>
                    <ListaIngredientes ingredientes={ingredientes} />

                    <ModoPreparo instrucoes = {receita.strInstructions}/>
                </div>
    </div>
};

export default ReceitaDetails;