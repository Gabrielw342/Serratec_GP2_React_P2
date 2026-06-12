import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { FavContextProvider } from "./context/FavContext/FavContextProvider";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavContextProvider>
      <App />
    </FavContextProvider>
  </StrictMode>,
)