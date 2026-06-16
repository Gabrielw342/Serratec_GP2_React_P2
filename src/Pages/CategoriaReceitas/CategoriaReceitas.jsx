import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './CategoriaReceitas.module.css'
import RecipeCard from '../../components/RecipeCard/RecipeCard'
import api from '../../services/api'

export const CategoriaReceitas = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { tipoCategoria } = location.state

    const [receitas, setReceitas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(`/receitas/tipo/${tipoCategoria}`)
            .then((res) => {
                setReceitas(res.data.data || res.data || [])
                setLoading(false)
            })
            .catch(() => setLoading(false))
    }, [tipoCategoria])

    return <div className={styles.container}>

        <div className={styles.tituloReceitas}>
            <h1><strong>{tipoCategoria}</strong></h1>
        </div>

        {loading &&
            <p className={styles.mensagem}>Carregando receitas...</p>
        }

        {!loading && receitas.length === 0 &&
            <p className={styles.mensagem}>Nenhuma receita encontrada.</p>
        }

        {!loading && receitas.length > 0 &&
            <section className={styles.listaReceitas}>
                {receitas.map((receita) =>
                    <RecipeCard
                        key={receita.id}
                        imagem={receita.link_imagem}
                        nome={receita.receita}
                        onClick={() => navigate(`/receita/${receita.id}`)}
                    />
                )}
            </section>
        }

    </div>
}