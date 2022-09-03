import styled from "styled-components";
import { cardShadow, hoverEffect } from "../../utils";

const Heading = styled.div`
 align-items:center;
 margin-right: 20px;
 margin-left: 10px;
 width: 100%;
 font-size: 50px;
 color: white;
 background-color: #0f4d92;
 margin-bottom: 50px;
 justify-content: center;
 text-align: center;
 border-radius: 1rem;
 box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
`;
const InfoCard = styled.div`
  height: fit-content;
  position: relative;
  width: 98ch;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  align-items: center;
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
  height: 10vh;
  width: 70ch;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
  width: 70ch;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  /* align-items: center; */
  margin-bottom: 0.4rem;
  width: 70ch;
  /* ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `} */
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
  /* justify-items: center;
  text-align: center; */
  display: flex;
  flex-direction: row;
  /* width: fit-content; */
  justify-content: space-evenly;
`;
const Title = styled.h3`
  color: black;
  text-align: center;
  margin-left: 20px;
`;
const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
 const InterestFooter = styled.div`
 height: fit-content;
  position: relative;
  width: 98ch;
  background-color: green;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  align-items: center;
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

const ButtonHolder = styled.div`
float: right !important;
right: 0px;
justify-content: flex-end;
margin-right: 20px;
`

export {Heading, InfoCard, Card, CardContent, Row, Digit, InfoContainer,
    ButtonHolder, Title, SubTitle, PageContainer, InterestFooter}