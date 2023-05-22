import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./responsive";
import { LOGIN_MUTATION } from "../../graphql/user/login";
import { useMutation } from "@apollo/client";
import { Backdrop, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/authReducer";
import { CustomOverlay } from "../../componemts/Shared/CustomOverlay";

const Signin = () => {
  const [user, setUser] = useState({ identifier: "", password: "" });
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      data: {
        login: { user: userLogged, jwt },
      },
    } = await loginMutation({ variables: user });
    if (jwt && userLogged) {
      localStorage.setItem("access_token", jwt);
      dispatch(login({ ...userLogged }));
      redirectToProfile();
    }
  };

  const redirectToProfile = useCallback(() => {
    if (isAuthenticated) {
      navigation("/profile");
    }
  });
  useEffect(() => {
    redirectToProfile();
  }, [isAuthenticated, redirectToProfile]);
  if (loading) return <CustomOverlay isLoading={loading} />;

  return (
    <Container>
      <Wrapper>
        <Title>CONNECTEZ VOUS</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="nom d'utilisateur ou adresse e-mail"
            onChange={handleChange}
            name="identifier"
            required
          />
          <Input
            placeholder="mot de passe"
            onChange={handleChange}
            name="password"
            required
          />
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
  padding: 2rem;
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
  border-radius: 4px;
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
