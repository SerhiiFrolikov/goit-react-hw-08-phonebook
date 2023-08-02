import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, FormLabel, FormInput, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <FormInput
          type="text"
          name="name"
          required
          minLength={2}
          maxLength={30}
        />
      </FormLabel>
      <FormLabel>
        Email
        <FormInput type="email" name="email" required />
      </FormLabel>
      <FormLabel>
        Password
        <FormInput type="password" name="password" required minLength={8} />
      </FormLabel>
      <Button type="submit">Register</Button>
    </Form>
  );
};
