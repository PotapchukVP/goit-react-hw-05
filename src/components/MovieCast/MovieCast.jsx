import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "../../../api.jsx";
import profile from "../../img/profile.png";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchCast(movieId) {
      if (!movieId) return;
      try {
        const response = await getCast(movieId);
        setCast(response.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCast(movieId);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ul className={css.castContainer}>
        {cast.map((item) => (
          <li key={item.id} className={css.castItem}>
            {item.profile_path ? (
              <img
                className={css.imgItem}
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
              />
            ) : (
              <img className={css.imgItem} src={profile} alt="Profile" />
            )}
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
