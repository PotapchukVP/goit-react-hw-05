import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviews } from "../../../api.jsx";
import css from "./MovieReview.module.css";

const MovieReview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews(movieId) {
      if (!movieId) return;
      try {
        const response = await getReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(error);
      }
    }

    fetchReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {reviews.length > 0 ? (
        <ul className={css.container}>
          {reviews.map((review) => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default MovieReview;
