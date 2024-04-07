import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage.jsx"));
const NotFoundPage = React.lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const MoviesPage = React.lazy(() =>
  import("./pages/MoviesPage/MoviesPage.jsx")
);
const MovieDetailsPage = React.lazy(() =>
  import("./pages/MoviesDetailsPage/MovieDetailsPage.jsx")
);
const MovieCast = React.lazy(() =>
  import("./components/MovieCast/MovieCast.jsx")
);
const MovieReview = React.lazy(() =>
  import("./components/MovieReview/MovieReview.jsx")
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
