import {
  Facebook,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 10%;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #${(props) => props.colour};
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  padding-right: 10%;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

function Footer() {
  function redirectUrl(social) {
    if (social === "facebook")
      window.location.href = "https://www.facebook.com";
    if (social === "instagram")
      window.location.href = "https://www.instagram.com";
  }

  return (
    <Container>
      <Left>
        <h1>Red Apple Inc.</h1>
        <Desc>
          A company description is an overview or summary of a business. It's an
          important part of a business plan that often briefly describes an
          organization's history, location, mission statement, management
          personnel and, when appropriate, legal structure.
        </Desc>
        <SocialContainer>
          <SocialIcon colour="3B5999" onClick={() => redirectUrl("facebook")}>
            <Facebook />
          </SocialIcon>
          <SocialIcon colour="E4405F" onClick={() => redirectUrl("instagram")}>
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />12 Marina Boulevard, Marina Bay Financial Centre Tower 3,<br></br> Singapore 018982
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +65 1234 5678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@redappleinc.com
        </ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
