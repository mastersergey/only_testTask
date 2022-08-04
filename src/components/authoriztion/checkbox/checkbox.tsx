import './checkbox.css';

import styled from 'styled-components';

const CheckboxLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 40px 0px;
`;

function Checkbox() {
  return (
    <CheckboxLabel>
      <input type={'checkbox'} className="checkbox" />
      <span className="checkbox__custom" />
      <span>Запомнить пароль</span>
    </CheckboxLabel>
  );
}

export default Checkbox;
