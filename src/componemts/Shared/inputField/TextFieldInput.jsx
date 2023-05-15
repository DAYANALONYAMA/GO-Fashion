import React, { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { mobile } from "../../../pages/auth/responsive";

export const InputField = ({
  control,
  rules,
  name,
  secureTextEntry,
  placeholder,
  errors,
  labelTextError,
}) => {
  const refInputField = useRef(null);
  const [ isError, setIsError] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderSigninInputTypeStyle = () => {
    if (errors !== undefined && Object.keys(errors).length !== 0) {
      refInputField.current.classList.add("input-error");
      setIsError(true)
      return
    }
    setIsError(false)
    refInputField.current.classList.remove("input-error");
  };
  useEffect(() => {
    renderSigninInputTypeStyle();
  }, [isError, renderSigninInputTypeStyle]);
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value, onBlur, secureTextEntry } }) => (
          <TextField
            error={isError}
            fullWidth
            id="fullWidth" 
            ref={refInputField}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            type={ secureTextEntry ? 'password' : 'text'}
            placeholder={placeholder}
          />
        )}
      />
      {errors && <Typography style={{color: isError? 'red':'black'}} >{labelTextError}</Typography>}
    </>
  );
};


const Wrapper = styled.div`
  width: 100%;

  .input-error{
    color: red;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 95%;
  margin: 20px 10px 0px 0px;
  padding: 10px;


`;
