
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import Features from './Features/Features'
import Reviews from './Reviews/Reviews'

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const Catalog= lazy(() => import("../pages/Catalog/Catalog.jsx"));
const Product = lazy(() => import("../pages/Product/Product.jsx"));

function App() {
  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} >
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route >
        <Route path="*" />
      </Routes>

        </Suspense>

    </>
  )
}

export default App
