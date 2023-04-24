import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px;
  width: 100px;

  border: 1px solid #111464;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ff782d;
    color: white;
    border: none;
  }
`;

const Lien = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CONNECTEZ VOUS</Title>
        <Form>
          <Input placeholder="nom d'utilisateur ou adresse e-mail" />
          <Input placeholder="mot de passe" />
          <Button>Connexion</Button>
          <Lien>Mot de passe oublier</Lien>
          <Lien>
            <Link to="/register">Créer un nouveau compte</Link>
          </Lien>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;
