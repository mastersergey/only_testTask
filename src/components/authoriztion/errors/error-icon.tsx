import styled from 'styled-components';

const ErrorIconStyle = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffc8c8;
  color: #ee6565;
  font-size: 14px;
  text-align: center;
  margin-right: 14px;
`;

function ErrorIcon(props: { inner: string }) {
  return <ErrorIconStyle>{props.inner}</ErrorIconStyle>;
}

export default ErrorIcon;
