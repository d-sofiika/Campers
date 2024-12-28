
import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import './index.scss'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
