import { Field, Form, Formik } from "formik";
import styles from "../SearchBox/SearchBox.module.css";
import toast from "react-hot-toast";

const SearchBox = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    const query = values.search.trim().toLowerCase();
    if (!query) {
      toast.error("The search field cannot be empty!");
      return;
    }
    onSearch(query);
    actions.resetForm();
  };

  return (
    <div className={styles.searchContainer}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={styles.searchForm}>
          <Field
            className={styles.searchInput}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <button className={styles.searchButton} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBox;