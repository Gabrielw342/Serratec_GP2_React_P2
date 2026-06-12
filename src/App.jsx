import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <main className="content">
          <Login />
        </main>

        <Footer />
      </div>
      <Home />
    </>

  );
}

export default App;