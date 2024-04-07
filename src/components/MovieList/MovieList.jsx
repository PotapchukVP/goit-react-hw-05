import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ data }) => {
  return (
    <div>
      <ul className={css.listWrapper}>
        {data.results
          .filter((item) => item.poster_path !== null)
          .map((item) => (
            <Link key={item.id} to={`/movies/${item.id}`} className={css.link}>
              <li className={css.item}>
                <img
                  className={css.imgItem}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
                <p className={css.posterText}>{item.original_title}</p>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
export default MovieList;
