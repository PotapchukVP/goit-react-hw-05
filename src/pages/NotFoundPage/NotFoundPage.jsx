import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <p className={css.notFound}>Ooops! Page not found!</p>
      <NavLink to="/">Back to home</NavLink>
    </div>
  );
};

export default NotFoundPage;
