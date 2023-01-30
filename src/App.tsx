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
  const [selectedSideBarElement, setSelectedSideBarElement] =
    React.useState<any>("");
  const [renderArea, setRenderArea] = React.useState<any>(<canvas></canvas>);

  const addMesh = (geometry: any) => {
    console.log(geometry);
  };

  return (
    <AppDiv>
      <TopBar addMesh={addMesh} />
      <MainAreaDiv>
        <RenderArea />
        <SideBar
          selectedSideBarElement={selectedSideBarElement}
          setSelectedSideBarElement={setSelectedSideBarElement}
        />
      </MainAreaDiv>
    </AppDiv>
  );
}

export default App;
