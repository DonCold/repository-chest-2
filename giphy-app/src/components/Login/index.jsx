import React, { useEffect } from 'react'
import { useLocation } from 'wouter'

import useUser from '@/hooks/useUser';
import { Formik, Form, ErrorMessage } from 'formik';
import Button from './../Button/index';

import { StyledField } from './styles';

function Login({ onLogin }) {
  const [, setLocation] = useLocation()
  const { login, isLogged } = useUser()

  const validateForm = values => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length > 15) {
      errors.password = 'Must be 15 characters or less';
    }
    return errors;
  }

  const handleSubmit = (values) => {
    login(values.username, values.password);
  }

  useEffect(() => {
    if (isLogged) {
      onLogin && onLogin()
      setLocation('/')
    }
  }, [isLogged]);

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        {
          () => (
            <Form>
              <StyledField type="text" placeholder="username" name="username"/><br />
              <ErrorMessage name="username" component="small" /><br />
              <StyledField type="password" placeholder="password" name="password"/><br />
              <ErrorMessage name="password" component="small" /><br />
              <Button>Login</Button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default Login;
