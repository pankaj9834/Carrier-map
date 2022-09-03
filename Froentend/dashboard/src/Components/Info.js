import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Badge from "./Badge";
import { cardShadow, hoverEffect } from "../utils";


function Info() {
  const navigate = useNavigate();
  const number  = useSelector((store) => store.interest.number)
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>5</Digit>
            <InfoContainer>
              <Title>Interest Guidance</Title>
              <SubTitle>Classroom</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>{ number }</Digit>
            <InfoContainer>
              <Title onClick={() => { navigate("/Interests")}}>Interests</Title>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

const InfoCard = styled.div`
  height: 100%;
  width: fit-content;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  display: flex !important;
  flex-direction: column;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
  height: fit-content;
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
const Digit = styled.div`
  background-color: green;
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  margin-left: 0.7rem;
  height: 50%;
`;
const Title = styled.h3`
  color: black;
  &:hover{
    cursor: pointer;
  }
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;

export default Info;
