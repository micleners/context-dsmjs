import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import AbilityInputs from './AbilityInputs';
import AttributeInputs from './AttributeInputs';
import { UPDATE_CHARACTER } from '../redux/actionTypes';

const StyledForm = styled.form`
  display: flex;
  align-items: center;

  .input-group {
    padding: 20px;
  }
`;

const CharacterForm = () => {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={character}
        onSubmit={(values) =>
          dispatch({ type: UPDATE_CHARACTER, character: values })
        }
      >
        {({ values, handleChange, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <AttributeInputs values={values} handleChange={handleChange} />
            <AbilityInputs values={values} handleChange={handleChange} />
            <button type="submit">Submit</button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default CharacterForm;
