import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login:", { email, password });
    // Add your authentication logic here
    // alert("Login successful!");
    
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
        // redirect user to the auth page
        window.location.href = "/contact";
        console.log("Login successful:", response.data);
        setLogin(true);
      })
      .catch((error) => {
        console.error("Login error:", error);
        error = new Error();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
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
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;
