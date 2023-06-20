import { useState } from "react";
import { setToken, fetchToken } from "./Auth.js";
import { useNavigate } from "react-router-dom";
const axios = require("axios");
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    if (username === "" && password === "") {
      return;
    } else {
      console.log("axios");
      axios
        .post("http://localhost:8000/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          if (response.data.token) {
            setToken(response.data.token);
            navigate("/profile");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
        });
    }
  };
  return (
    <>
      <div style={{ minHeight: 800, marginTop: 20 }}>
        <h1>Home Page</h1>
        <div style={{ marginTop: 50 }}>
          {fetchToken() ? (
            <p>You are logged in!</p>
          ) : (
            <form>
              <label style={{ marginRight: 10 }}>Input Username: </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
              />
              <label style={{ marginRight: 10 }}>Input Password: </label>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={login}>
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
