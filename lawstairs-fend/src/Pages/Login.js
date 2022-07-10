import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const [login, setLogin] = useState("");
  const history = useNavigate();
  // const [response, setResponse] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    let response = "";

    let user = await login;

    response = await fetch("http://localhost:9000/v3", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((Response) => Response.json())
      .then((data) => data.message);

    if (response === "success") {
      await localStorage.setItem("user1", response);

      history("/addData");
    } else alert(response);
    //   console.log(login);
    //   if (login.username) {
    //   } else {
    //     console.log(localStorage.getItem("user1"));
    //   }
  };
  return (
    <Container>
      <Content>
        {localStorage.getItem("user1") && <Navigate to="/adddata" />}
        <form action="post">
          <p>UserName</p>
          <input
            type="text"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <button onClick={handleClick}>Login </button>
        </form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 100px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 200px;
    background-color: rgba(249, 249, 249, 1);
    border-radius: 30px;
    &:hover {
    }

    & > p,
    input {
      color: black;
      padding: 4px;
      border-radius: 10px;
      outline: none;
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & > button {
      margin-top: 20px;
      width: 30%;
      height: 40px;
      padding: 20px;
      text-align: center;
      text-decoration: underline;
      font-size: 20px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: cyan;
      &:hover {
        background-color: lightblue;
        box-shadow: -2px -2px 10px cyan;
      }
    }
    p {
      color: black;
    }
  }
`;
