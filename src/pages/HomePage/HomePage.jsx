import css from "./HomePage.module.css";
import { getPopularMovies } from "../../../api";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function getPopularList() {
      try {
        const response = await getPopularMovies();
        setPopularMovies(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getPopularList();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul className={css.listStyle}>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.original_title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;
