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
            <label>Username</label>
            <input placeholder='Username'
            name='Username'
            type='Username'
            id='Username'
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
            <label>Email</label>
            <input placeholder='youremail@test.com'
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='********'
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            />
        </Form.Field>
        <Button type='submit'>SignUp</Button>
    </Form>
)

}

export default Signup;