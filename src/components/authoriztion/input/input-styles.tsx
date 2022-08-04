import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 16px;
  margin-top: 10px;
  width: 620px;
  height: 60px;
  background-color: #f5f5f5;
  padding-left: 20px;
  outline: none;
  border-radius: 8px;
  border: ${(props) => (props.theme === 'error' ? '1px solid #e26f6f' : 'none')};
`;

const TextInputLabel = styled.label`
  margin-top: 20px;
`;

export { StyledInput, TextInputLabel };
