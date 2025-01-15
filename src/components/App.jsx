import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Features from "./CamperId/Features/Features.jsx";
import Reviews from "./CamperId/Reviews/Reviews.jsx";
import Loader from "./Loader/Loader.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const Catalog = lazy(() => import("../pages/Catalog/Catalog.jsx"));
const Camper = lazy(() => import("../pages/Camper/Camper.jsx"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Loader/>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Camper />}>
            <Route index element={<Navigate to="features" replace />} />
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
