import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Checkbox from '../components/authoriztion/checkbox/checkbox';
import ServerError from '../components/authoriztion/errors/server-error';
import FormButton from '../components/authoriztion/form-button';
import Input from '../components/authoriztion/input/input';
import serverResponse from '../server/server';

const StyledForm = styled.form`
  display: flex;
  height: 450px;
  width: 650px;
  flex-direction: column;
  justify-content: flex-end;
`;

type FormValues = {
  login: string;
  password: string;
};

function Authorization() {
  const methods = useForm<FormValues>({ mode: 'onBlur' });
  const {
    clearErrors,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (value) => {
    clearErrors(undefined);
    const { login, password } = value;
    const response = await serverResponse(login, password);

    if (response === 'accept') {
      localStorage.setItem('login', login);
      navigate('/profile');
    } else if (response === 'wrongLogin') {
      setError('login', {
        type: 'server',
        message: `Пользователя ${login} не существует`,
      });
    } else {
      setError('password', {
        type: 'server',
        message: 'Неверный пароль',
      });
    }
  };

  const isWrongPassword = errors?.password && errors.password.type !== 'required';
  const isWrongLogin = errors?.login && errors.login.type !== 'required';
  const isLoginRequired = errors?.login?.type === 'required';
  const isPasswordRequired = errors?.password?.type === 'required';

  const LoginInputTheme = errors?.login?.type === 'required' ? 'error' : 'default';
  const PasswordInputTheme = errors?.password?.type === 'required' ? 'error' : 'default';

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {isWrongPassword && <ServerError text={errors?.password?.message} />}
        {isWrongLogin && <ServerError text={errors?.login?.message} />}
        <Input
          theme={LoginInputTheme}
          type={'login'}
          isRequired={isLoginRequired}
          title={'Логин'}
        />
        <Input
          theme={PasswordInputTheme}
          type={'password'}
          isRequired={isPasswordRequired}
          title={'Пароль'}
        />
        <Checkbox />
        <FormButton disabled={isSubmitting}>Войти</FormButton>
      </StyledForm>
    </FormProvider>
  );
}

export default Authorization;
