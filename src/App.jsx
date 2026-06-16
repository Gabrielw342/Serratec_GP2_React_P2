import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home/home";
import Login from "./Pages/login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Favoritos from "./Pages/Favoritos/favoritos";
import ReceitaDetails from "./Pages/ReceitaEspecifica/ReceitaEspecifica"
import { CategoriaReceitas } from "./Pages/CategoriaReceitas/CategoriaReceitas"
import { Routes, Route } from "react-router-dom";
import Categorias from "./Pages/Categorias/categorias";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/categoria" element={<Categorias />} />
                    <Route path="/listagem" element={<CategoriaReceitas />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/receita/:id" element={<ReceitaDetails />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
export default App;