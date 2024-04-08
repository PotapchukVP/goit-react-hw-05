import css from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import { getMoviesBySearch } from "../../../api.jsx";

import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import MovieList from "../../components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    async function getSearchData() {
      if (search === "") return;
      try {
        const response = await getMoviesBySearch(search);
        setData(response);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    }
    getSearchData();
  }, [search]);

  return (
    <div>
      <SearchBar onSearch={setSearch} onError={setError} />
      {data && <MovieList data={data}></MovieList>}
    </div>
  );
};

export default MoviesPage;
