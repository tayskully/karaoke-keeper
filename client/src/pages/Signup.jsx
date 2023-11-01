import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { react } from 'react'
import Auth from '../utils/auth';
import { Button, Checkbox, Form } from 'semantic-ui-react';

function Signup () {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
        
        <Form.Field>
            <label>Email</label>
            <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

}

export default Signup;