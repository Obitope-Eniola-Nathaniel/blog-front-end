import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./LoginForm.css";


const cookies = new Cookies();

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/auth/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((response) => {
        // set the cookie
        cookies.set("TOKEN", response.data.token, {
          path: "/",
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day
        });
        setLogin(true);
        setError("");
        // redirect user to the home page
        window.location.href = "/";
        console.log("Login successful:", response.data);
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("Login failed. Please try again.");
        setLogin(false);
      });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="btn" type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
