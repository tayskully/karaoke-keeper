import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutation";

import Auth from "../utils/auth";
import { Button, Checkbox, Form } from "semantic-ui-react";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, {error}] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-form">
      
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Username</label>
        <input
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="youremail@test.com"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          placeholder="********"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
        />
      </Form.Field>
      <Button basic color='green' content='Green' type="submit">SignUp</Button>
    </Form>
    </div>
  );
}

export default Signup;
