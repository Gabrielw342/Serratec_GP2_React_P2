import { useState } from 'react'
import './App.css'
import Favoritos from './pages/Favoritos/favoritos'

function App() {
  const [pagina, setPagina] = useState('home')

  if (pagina === 'favoritos') {
    return <Favoritos />
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setPagina('favoritos')}>
        Ver Favoritos
      </button>
    </div>
  )
}

export default App
