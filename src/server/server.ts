const userLogin = 'steve.jobs@example.com';
const userPassword = 'password';

function serverResponse(login: string, password: string) {
  const isUserValid = login === userLogin && password === userPassword;
  const isLoginValid = login !== userLogin;
  return new Promise((resolve) => {
    setTimeout(() => {
      if (isUserValid) {
        resolve('accept');
      } else if (isLoginValid) {
        resolve('wrongLogin');
      } else {
        resolve('wrongPassword');
      }
    }, 1000);
  });
}

export default serverResponse;
