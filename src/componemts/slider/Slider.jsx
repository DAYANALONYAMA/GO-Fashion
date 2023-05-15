import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
// import ImgAccueil from "../assets/accueil.jpg";
import { sliderItems } from "./data";
import { mobile } from "./responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  padding-top: 5%;
  ${mobile({})};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;

  ${mobile({
    width: "25px",
    height: "25px",
  })};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({})}
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({
    flexDirection: "column-reverse",
    height: "100vh",
    marginTop: "50px",
  })}
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;

  ${mobile({})}
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  ${mobile({})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 5%;
  ${mobile({
    position: "Absolute",

    padding: "0",
  })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({
    textAlign: "center",
    color: "aliceblue",
    fontSize: "30px",
  })}
`;

const Desc = styled.p`
  margin: 8% 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  ${mobile({
    fontWeight: "bold",
    color: "aliceblue",
    letterSpacing: "0.1px",
    fontSize: "10px",
    textAlign: "center",
    overflow: "hidden",
  })}
`;
const Button = styled.button`
  padding: 2%;
  border: 2px solid #111464;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #ff782d;
    color: white;
    border: none;
  }
  ${mobile({
    visibility: "hidden",
  })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer className="infoContainer">
              <Title>{item.title} </Title>
              <Desc>{item.desc} </Desc>
              <Button>VOIR PLUS</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
export default Slider;
