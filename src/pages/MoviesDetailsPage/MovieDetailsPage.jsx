import { useEffect, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { getMoviesDetails } from "../../../api.jsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails(movieId) {
      if (!movieId) return;
      try {
        const response = await getMoviesDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError("Error fetching movie details");
        console.error(error);
      }
    }
    fetchMovieDetails(movieId);
  }, []);

  const getScore = ({ vote_average }) => {
    return (vote_average * 10).toFixed();
  };

  const getGenres = ({ genres }) =>
    genres.map((genre) => genre.name).join(", ");

  const getYears = ({ release_date }) => new Date(release_date).getFullYear();

  return (
    <div>
      <Link to="/movies/">
        <button className={css.button}>Back</button>
      </Link>
      {error && <p>{error}</p>}
      {movie && (
        <div className={css.moviesWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div className={css.moviesDescription}>
            <h2 className={css.movieTitle}>
              {movie.original_title + " " + "(" + getYears(movie) + ")"}
              <p className={css.movieTagLine}>{movie.tagline}</p>
            </h2>
            <h3>User Score: {getScore(movie)}%</h3>
            <h3>Overview:</h3>
            <p>{movie.overview}</p>
            <h3>Genres:</h3>
            <p>{getGenres(movie)}</p>
          </div>
        </div>
      )}
      <ul className={css.linkWrapper}>
        <li>
          <NavLink to={"cast"} className={css.link}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={"reviews"} className={css.link}>
            Review
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
