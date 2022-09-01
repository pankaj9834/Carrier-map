import React from "react";
import styled from "styled-components";
import { RiContactsBook2Fill } from "react-icons/ri";
import { SiGooglemeet } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { AiFillProject, AiFillIdcard } from "react-icons/ai";
import Profiles from "./Profiles";
import AvatarImage4 from "../assets/avatarImage4.jpg";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage4} />
        <Name>Ashish Srivastav</Name>
        <Profiles content="Profile" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiContactsBook2Fill />
            <h3>BTech in Computer Science </h3>
          </Link>
          <Link>
            <AiFillProject />
            <h3>Multiple Choices</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Payments</h3>
          </Link>
          <Link>
            <SiGooglemeet />
            <h3>Online Meets With Experts</h3>
          </Link>
        </Links>
        <ContactContainer>
          <h5>
            <span>Having troubles?</span>
          </h5>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  /* width: 100%; */
  height: 100% !important;
  border-radius: 2rem;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 350px;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: green;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 10%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #0f4d92;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
