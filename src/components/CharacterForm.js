import React from 'react';
import { Formik } from 'formik';

import AbilityInputs from './AbilityInputs';
import AttributeInputs from './AttributeInputs';
import { StyledForm } from './styled';

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
