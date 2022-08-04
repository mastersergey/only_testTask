import { useFormContext } from 'react-hook-form';

import InputError from './input-error';
import { StyledInput, TextInputLabel } from './input-styles';

type InputType = {
  theme: string;
  type: string;
  isRequired: boolean;
  title: string;
};

function Input(props: InputType) {
  const { theme, type, isRequired, title } = props;
  const { register } = useFormContext();

  const inputType = type === 'password' ? 'password' : 'text';

  return (
    <TextInputLabel>
      <span>{title}</span>
      <StyledInput
        {...register(type, { required: true })}
        type={inputType}
        theme={theme}
      />
      {isRequired && <InputError>Обязательное поле</InputError>}
    </TextInputLabel>
  );
}

export default Input;
