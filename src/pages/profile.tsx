import { useNavigate } from 'react-router';

import ExitButton from '../components/profile/exit-button';
import StyledDiv from '../components/profile/styled-block';
import WelcomeText from '../components/profile/welcome-text';

function Profile() {
  const navigate = useNavigate();

  const user = localStorage.getItem('login');

  function hundleLogOut() {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <StyledDiv>
      <WelcomeText>
        Здраствуйте, <b>{user}</b>
      </WelcomeText>
      <ExitButton onClick={hundleLogOut}>Выйти</ExitButton>
    </StyledDiv>
  );
}

export default Profile;
