import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
