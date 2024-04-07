import css from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";
import { IoSearch } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({ onSearch, onError }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <Formik
      initialValues={{ userSearch: "" }}
      onSubmit={(values, actions) => {
        console.log("User input: ", values.userSearch);
        const userInput = values.userSearch;
        actions.resetForm();

        userInput.trim() !== ""
          ? onSearch(userInput)
          : onError("Please enter name of movie for search");
        setSearchParams({ query: values.userSearch });
      }}
    >
      <Form className={css.searchContainer}>
        <div className={css.searchBox}>
          <button className={css.searchButton} type="submit">
            <IoSearch />
          </button>
          <Field
            className={css.searchField}
            type="input"
            name="userSearch"
            placeholder="Search images and photos"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
