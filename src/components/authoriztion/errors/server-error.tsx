import styled from 'styled-components';

import ErrorIcon from './error-icon';

const ServerErrorStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 620px;
  height: 60px;
  padding-left: 20px;
  background-color: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
`;

function ServerError(props: { text: string | undefined }) {
  return (
    <ServerErrorStyle>
      <ErrorIcon inner="!" />
      {props.text}
    </ServerErrorStyle>
  );
}

export default ServerError;
