import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Registration:", { username, password, email });
    // Add your registration logic here

    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/api/auth/register",
      data: {
        username,
        email,
        password,
      },
    };

    axios(configuration)
      .then((response) => {
        console.log("Registration successful:", response.data);
        setRegister(true);
      })
      .catch((error) => {
        console.error("Registration error:", error);
        error = new Error();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {register ? (
        <p className="text-success">You Are Registered Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Registered</p>
      )}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
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

      <button type="submit">Register</button>
    </form>
  );
}
export default RegistrationForm;
