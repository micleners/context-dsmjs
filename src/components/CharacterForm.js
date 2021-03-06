import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';

import AbilityInputs from './AbilityInputs';
import AttributeInputs from './AttributeInputs';

const StyledForm = styled.form`
  display: flex;
  align-items: center;

  .input-group {
    padding: 20px;
  }
`;

const CharacterForm = ({ character, setCharacter }) => (
  <div>
    <Formik
      enableReinitialize={true}
      initialValues={character}
      onSubmit={(values) => {
        setCharacter(values);
      }}
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

export default CharacterForm;
