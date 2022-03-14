import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(127, 127, 127, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const URLLink = styled.a`
  margin: 8px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;

ReactSession.setStoreType("localStorage");

function Login() {
  const navigate = useNavigate();

  const userNameRef = useRef();
  const passwordRef = useRef();

  function authUser() {
    const userData = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    // sending a post request
    fetch("https://localhost:8443/authUser", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.userId !== null) {
          ReactSession.set("userId", data.userId);
          ReactSession.set("firstName", data.firstName);
          navigate("/");
        } else {
          console.log("fail");
        }
      });
    
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button onClick={() => authUser()}>LOGIN</Button>
          <URLLink><Link to="/register">Create New Account</Link></URLLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;