
import { Route, Routes } from 'react-router-dom'
import Home from './Header/Header'
import Catalog from '../pages/Catalog/Catalog'
import Product from '../pages/Product/Product'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />
      </Routes>
      
    </>
  )
}

export default App
