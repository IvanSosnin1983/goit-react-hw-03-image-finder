import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import css from '../Searchbar/Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = { query: '' };

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.query.trim() === '') {
      toast.info('Please enter a search term');
      actions.resetForm();
      return;
    }
    const searchValues = values.query.trim();
    onSubmit(searchValues, actions);
  };

  return (
    <header className={css.searchbar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form autoComplete="off" className={css.form}>
          <button type="submit" className={css.button}>
            <ImSearch size="30px" />
          </button>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
        </Form>
      </Formik>
      <ToastContainer autoClose={2000} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
