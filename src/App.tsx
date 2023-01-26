import React from "react";
import "./App.css";
import styled from "styled-components";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import RenderArea from "./components/RenderArea";

const AppDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const MainAreaDiv = styled.div`
  width: 100%;
  height: 97%;
  display: flex;
`;

function App() {
  return (
    <AppDiv>
      <TopBar />
      <MainAreaDiv>
        <RenderArea />
        <SideBar />
      </MainAreaDiv>
    </AppDiv>
  );
}

export default App;
