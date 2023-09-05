import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/phonebookReducer';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleChange = (event) => {
    onChangeFilter(event.currentTarget.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder=" Search by name"
      value={filter}
      onChange={handleChange}
      className={css.input}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
