import React, { useState } from "react";
import axios from "axios";
import { setToken, fetchToken } from "./Auth.js";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      await axios
        .post("http://127.0.0.1:8000/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          const token = response.data.token;
          if (token) {
            localStorage.setItem("accessToken", token);
            setToken(response.data.token);
            navigate("/profile");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          {!fetchToken() ? (
            <p>You are logged in!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign up</button>
            </form>
          )}
        </div>
      </div>
      {/*   
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form> */}
    </>
  );
}

export default LoginForm;

// import {useState} from 'react'
// import {setToken, fetchToken} from './Auth.js'
// import {useNavigate} from "react-router-dom";
// const axios = require('axios');
// export default function Login(){
//     const navigate = useNavigate();
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const login = () =>{
//         if(username === '' && password === ''){
//             return
//         }else{
//             console.log('axios')
//             axios.post('http://127.0.0.1:8000/login', {
//                 username: username,
//                 password: password
//             },{ withCredentials: true })
//             .then(function (response) {
//                 if(response.data.token){

//                     setToken(response.data.token)
//                     navigate("/profile");
//                 }
//             })
//             .catch(function (error) {
//                 console.log("no conecta")
//                 console.log(error, 'error');
//             });
//         }

//     }
//     return(
//         <>

//             <div style = {{minHeight: 800, marginTop: 20 }}>
//                 <h1>Home Page</h1>
//                 <div style = {{marginTop: 50 }} >
//                     {
//                         fetchToken()
//                         ? (
//                             <p>You are logged in!</p>
//                         )
//                         : (
//                             <form>
//                             <label style = {{marginRight: 10 }}>Input Username: </label>
//                             <input type = 'text'  onChange={ (e)=> setUsername(e.target.value)} />
//                             <label style = {{marginRight: 10 }}>Input Password: </label>
//                             <input type = 'text'  onChange={ (e)=> setPassword(e.target.value)} />
//                             <button type = 'button' onClick = {login}>Login</button>
//                         </form>
//                         )
//                     }

//                 </div>
//             </div>

//         </>
//     )
// }
