import styled from "styled-components";
import AvatarImage4 from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";

//import React, { useState } from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

//import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";

function Projects() {
  // const [inpval, setInput] = useState({
  // Interest: "",
  //});

  //const getdata = (e) => {
  //const { value, name } = e.target;
  //setInput(() => {
  //   return {
  //  ...inpval,
  // [name]: value,
  // };
  //});
  //};
  //const addData = (e) => {
  //e.preventDefault();
  //console.log(addData);
  //};
  const navigate = useNavigate();
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage4} alt="" />
        </Avatar>
        <Detail>
          <Title>Multiple Choices</Title>
          <DropdownButton id="dropdown-item-button" title="Submit">
            <Dropdown.Item as="button">Sports</Dropdown.Item>
            <Dropdown.Item as="button">Program Analysis</Dropdown.Item>
            <Dropdown.Item as="button">Esports</Dropdown.Item>
            <Dropdown.Item as="button">Singing</Dropdown.Item>
            <Dropdown.Item as="button">Networking</Dropdown.Item>
            <Dropdown.Item
              as="button"
              onClick={() => {
                navigate("/GovernmentJobPage");
              }}
            >
              GovernmentJobPage
            </Dropdown.Item>
          </DropdownButton>
        </Detail>
      </Project>
    </YourProjects>
  );
}

const YourProjects = styled.div`
  height: 30%;
  background-color: white;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  media only screen and (min-width : 992px) 
    width: 50%;
    @media screen and (min-width: 320px) and (max-width: 1080px) 
    width: 100%;
    height: max-content !important;
    margin-top: 1rem;
  
`;

const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
`;
const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
const Detail = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h3`
  font-weight: 500;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;

// eslint-disable-next-line no-unused-vars

export default Projects;
