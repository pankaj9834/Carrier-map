import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Review from "./Review";
import Info from "./Info";
import JoinWhatsapp from "./JoinWhatsapp";
import ReviewByTeacher from "./ReviewByTeacher";
import Projects from "./Projects";
import QuizResults from "./QuizResults";


function MainContent() {
  return (
  
    <Container>
    <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Review />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Interest</TitleText>
            <Projects />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <QuizResultContainer>
              <TitleText>
                Videos To Grow and understand your Interest
              </TitleText>
              <QuizResults />
            </QuizResultContainer>
            <JoinWhatsapp />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Expertise Advise</TitleText>
            <ReviewByTeacher />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
 
  );
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  margin: 1rem 8rem 1rem 4rem;
  margin-bottom: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: fit-content;
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
min-height: fit-content;
height: fit-content;
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const SectionTwo = styled.div`
  top:0;
  display: flex;
  gap: 2rem;
  height: fit-content;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const QuizResultContainer = styled.div`
  height: fit-content;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default MainContent;
