import styled from "styled-components";

import MainContent from "./MainContent";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const Sidebar = React.lazy(() => import("../Components/Sidebar"));
function Dash(props) {
  return (
    <React.Fragment>
      <div>
        <Suspense fallback={<div>....Loading Please Wait...</div>}>
          <Container>
            <Sidebar />
            <MainContent />
          </Container>
        </Suspense>
      </div>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  /* height: 97vh; */
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    overflow-x: scroll;
  }
`;

export default Dash;
