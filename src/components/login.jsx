import '../index.css';
import '../App.css'
import { useEffect } from 'react';

export default function Login() {
    useEffect(() => {
      fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "",
                password: ""
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    })
    return (
      <div className="login">
        <h1>Login</h1>
        <form action="submit">
          <label>Username: </label>
          <input type="text" name="username" id="userName" />
          <br />
          <label>Password: </label>
          <input type="text" name="password" id="passWord" />
          <br />
          <input type="button" value="Submit" />
        </form>
      </div>
    );
  }
