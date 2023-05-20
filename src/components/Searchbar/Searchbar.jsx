import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Formik, Form, Field } from 'formik';
import { Search, SubmitButton } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const hendleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };
  return (
    <Search>
      <Formik initialValues={{ search: '' }} onSubmit={hendleSubmit}>
        <SearchForm>
          <SubmitButton type="submit">Search</SubmitButton>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Search>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
