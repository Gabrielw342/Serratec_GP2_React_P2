import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Favoritos from './pages/Favoritos/favoritos'

function App() {
  const [pagina, setPagina] = useState('home')

  return (
    <div className="app">
      <Header />
      <main className="content">
        {pagina === 'favoritos' ? (
          <Favoritos />
        ) : (
          <>
            <Login />
            <Home />
            <button onClick={() => setPagina('favoritos')}>
              Ver Favoritos
            </button>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;