import { Skeleton, Box } from '@mui/material'
import React from 'react'
import styled from "styled-components";

const CustomCard = styled.div`
width: 400px;
height: 400px;
`


export const CustomSkeleton = ({type}) => {
  return (
    <CustomCard>
    <Skeleton animation={type} />
    </CustomCard>
  )
}
