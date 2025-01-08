
import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom'
import Features from './Features/Features'
import Reviews from './Reviews/Reviews'
import { ColorRing } from 'react-loader-spinner'

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const Catalog= lazy(() => import("../pages/Catalog/Catalog.jsx"));
const Product = lazy(() => import("../pages/Product/Product.jsx"));

function App() {
  return (
    <>

      <Suspense fallback={<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />}>
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
