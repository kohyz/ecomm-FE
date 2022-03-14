import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { ReactSession } from "react-client-session";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(127, 127, 127, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  margin-top: 20px;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: center;
`;

ReactSession.setStoreType("localStorage");

function Register() {
  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function addUser() {
    const userData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // sending a post request
    fetch("https://localhost:8443/addUser", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => {
        return response.json();
        // after promise is received, navigate to url
      })
      .then((data) => {
        ReactSession.set("userId", data.userId);
        ReactSession.set("firstName", data.firstName);
        navigate("/");
      });
    
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" id="firstName" ref={firstNameRef} />
          <Input placeholder="Last Name" id="lastName" ref={lastNameRef} />
          <Input placeholder="Username" id="userName" ref={userNameRef} />
          <Input placeholder="Email" type="email" id="email" ref={emailRef} />
          <Input
            placeholder="Password"
            type="password"
            required
            id="password"
            ref={passwordRef}
          />
          <Input placeholder="Confirm Password" type="password" />
        </Form>
        <Button onClick={() => addUser()}>CREATE ACCOUNT</Button>
      </Wrapper>
    </Container>
  );
}

export default Register;
