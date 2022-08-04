import styled from 'styled-components';

const FormButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  width: 640px;
  height: 60px;
  background-color: ${(props) => (props.disabled ? '#99A9FF' : '#4a67ff')};
  border-radius: 8px;
  border: none;
`;

export default FormButton;
