import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { FavContextProvider } from "./context/FavContext/FavContextProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavContextProvider>
        <App />
      </FavContextProvider>
    </BrowserRouter>
  </StrictMode>,
)