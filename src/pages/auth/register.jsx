import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@apollo/client";
import { REGISTER_MUTATION } from "../../graphql/user/register";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authReducer";
import { Backdrop, CircularProgress } from "@mui/material";
import { InputField } from "../../componemts/Shared/inputField/TextFieldInput";
import { useForm } from "react-hook-form";
import { USER_ROLE } from "../../config/variables";
import { useGraphQLFetch } from "../../hooks/useGraphQLFetch";
import { GET_ALL_ROLES } from "../../graphql/user/get-all-roles";
import { parseUserRoleResult } from "../../utils/parserResult/parseUserRole";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [user, setUser] = useState({})
  const { isAuthenticated } = useSelector((state) => state.auth);
  const {data: roles, loading:isRolesLoading, errorRoles} = useGraphQLFetch(GET_ALL_ROLES)
  const [loginMutation, { data, loading, error }] =
    useMutation(REGISTER_MUTATION);
  const dispatch = useDispatch();
  const navigation = useNavigate();
const findClientRole =()=> {
  let roleParsed = roles?.customRoles?.data.map((item)=> parseUserRoleResult(item))
  console.log("roles:", roles);
  return roleParsed.find((userRole)=>userRole.slug=== USER_ROLE.CLIENT)
}
  useEffect(()=>{
     findClientRole()
  },[roles])
  const onSubmit = async (data) => {
    delete data.confirmPassword

    setUser(data)
    loginMutation({ variables: {
      ...data,
      username: data.email,
      isActive: true,
      customRole: findClientRole().id,
    } });
    if (!loading && !error) {
      let userLogged = await data?.login?.user;
      localStorage.setItem("access_token", data?.login?.jwt);
      dispatch(login({ ...userLogged }));
      redirectToHomeScreen();
    }
  };

  const redirectToHomeScreen = () => {
    if (isAuthenticated) {
      navigation("/profile");
      reset();
    }
  };
  useEffect(() => {
    redirectToHomeScreen();
  }, [isAuthenticated]);
  if (loading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  return (
    <Container>
      <Wrapper>
        <Title>CRÉER UN COMPTE</Title>
        {JSON.stringify(findClientRole())}
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            placeholder="nom"
            control={control}
            name="middleName"
            rules={{ required: true }}
            errors={errors.middleName}
            labelTextError="Ce champ est requis."
          />
          <InputField
            placeholder="prénom"
            control={control}
            name="firstName"
            rules={{ required: true }}
            errors={errors.firstName}
            labelTextError="Ce champ est requis."
          />
          <InputField
            placeholder="email"
            control={control}
            name="email"
            rules={{ required: true }}
            errors={errors.email}
            labelTextError="Ce champ est requis."
          />
          <InputField
            placeholder="mot de passe"
            control={control}
            name="password"
            secureTextEntry={true}
            rules={{ required: true }}
            errors={errors.password}
            labelTextError="Ce champ est requis."
          />
          <InputField
            placeholder="confirmer votre mot de passe"
            control={control}
            name="confirmPassword"
            secureTextEntry={true}
            rules={{ required: true }}
            errors={errors.confirmPassword}
            labelTextError="Ce champ est requis."
          />
          <Agreement>
            En créant un compte, je consens au traitement de mes données
            personnelles &nbsp;
            <b>données conformément à la POLITIQUE DE CONFIDENTIALITÉY</b>
          </Agreement>
          <Button>CRÉER</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

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
`;
