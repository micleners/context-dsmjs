import styled from 'styled-components';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clearCharacter } from '../redux/actions';

const StyledCharacter = styled.div`
  padding: 60px 40px;
`;

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid;

  &:last-child {
    border-bottom: 1px solid;
  }

  div {
    margin: 10px 30px;
    text-align: right;
  }
`;

function Character({ character, clearCharacter }) {
  return (
    <StyledCharacter>
      {character &&
        Object.entries(character).map(([key, value]) => (
          <StyledRow key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </StyledRow>
        ))}
      <button onClick={() => clearCharacter()}>Clear Sheet</button>
    </StyledCharacter>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { character: state.character };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clearCharacter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
