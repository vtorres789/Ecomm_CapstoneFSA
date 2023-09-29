import { useState } from "react";
import React from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
      event.preventDefault();
      console.log("Hello 👋. Successfully registered!");
    }

    return (
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label>
              Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          <button>Submit</button>
          </form>
      </div>
    );
  }
