import styles from "./styles.module.css";

export const ListaIngredientes = ({ ingredientes = [] }) => {
    return (
        <div className={styles.ingredientes}>
        <h2>Ingredients</h2>
        
            <ul>
                {ingredientes.map((item,index) => (
                    <li key={index}>
                        {item.medida} {item.ingrediente}
                    </li>
                ))}
            </ul>
    </div>
    );
};