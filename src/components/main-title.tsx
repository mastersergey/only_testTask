import { Outlet } from 'react-router';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-weigth: 700;
  font-size: 64px;
`;

function MainTitle() {
  return (
    <>
      <StyledTitle>ONLY.</StyledTitle>
      <Outlet />
    </>
  );
}

export default MainTitle;
