import React, { useState } from "react";
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = event => {
    return setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const login = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        //Need History Object Here, But Can't Use It For Some Reason
        //props.history.push("protected");
      })
      .catch(error => console.log(error.response));
  };

  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={login}>
        <label htmlFor="username">Enter Username:</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Enter Password:</label>
        <input
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
