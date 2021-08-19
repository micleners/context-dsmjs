import React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AbilityInputs from './AbilityInputs';
import AttributeInputs from './AttributeInputs';
import { updateCharacter } from '../redux/actions';

const StyledForm = styled.form`
  display: flex;
  align-items: center;

  .input-group {
    padding: 20px;
  }
`;

const CharacterForm = ({ character, updateCharacter }) => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={character}
        onSubmit={(values) => updateCharacter(values)}
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

const mapStateToProps = (state) => {
  return { character: state.character };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm);
