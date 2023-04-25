import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        <Form>
          <Input placeholder="nom" />
          <Input placeholder="prénom" />
          <Input placeholder="nom d'utilisateur" />
          <Input placeholder="email" />
          <Input placeholder="mot de passe" />
          <Input placeholder="confirmer votre mot de passe" />
          <Agreement>
            En créant un compte, je consens au traitement de mes données
            personnelles
            <b>données conformément à la POLITIQUE DE CONFIDENTIALITÉY</b>
          </Agreement>
          <Button>CRÉER</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: 1px solid #111464;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ff782d;
    color: white;
    border: none;
  }
`

