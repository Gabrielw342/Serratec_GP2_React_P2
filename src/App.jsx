import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default App;