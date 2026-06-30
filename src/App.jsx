import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/home";
import Login from "./Pages/login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Favoritos from "./pages/Favoritos/favoritos";
import ReceitaDetails from "./Pages/ReceitaEspecifica/ReceitaEspecifica";
import { CategoriaReceitas } from "./Pages/CategoriaReceitas/CategoriaReceitas";
import Categorias from "./Pages/Categorias/categorias";
import ScrollToTop from "./components/ScrollToTop/scrolltotop";
import { Routes, Route } from "react-router-dom";

import ChatBot from "./components/ChatBot/ChatBot";

function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/categoria" element={<Categorias />} />
          <Route path="/pages/listagem" element={<CategoriaReceitas />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/receita/:id" element={<ReceitaDetails />} />
        </Routes>
      </main>

      <Footer />
      
      <ChatBot />
    </div>
  );
}

export default App;
