import styles from './styles.module.css'

export const CategoriasCard = ({src, alt, nomeCategoria, cor, children}) => {

    return <div className={styles.categoriasCard} style={{ '--bgCor': cor }}>

        <img src={src} alt={alt}/>

        <div className={styles.nomeCategoria}>
            {nomeCategoria}
        </div>
        
        {children}
    </div>  
}