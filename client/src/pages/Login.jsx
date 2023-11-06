import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutation";
import { Button, Form, Message } from "semantic-ui-react";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-form" >
      
    <Form onSubmit={handleFormSubmit}>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          placeholder="Password"
          name="password"
          type="password"
          id="pwd"
          value={formState.password}
          onChange={handleChange}
        />
      </Form.Field>
      <Button basic color='green' content='Green' type="submit">Submit</Button>
    </Form>
    
    </div>
  );
};

export default Login;
