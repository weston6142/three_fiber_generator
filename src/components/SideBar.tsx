import styled from "styled-components";

const SideBarDiv = styled.div`
  width: 25%;
  height: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SceneHierarchyDiv = styled.div`
  width: 90%;
  height: 25%;
  background-color: grey;
`;

const SceneDetailsDiv = styled.div``;

const SelectedObjectDiv = styled.div``;

export default function SideBar() {
  return (
    <SideBarDiv>
      <SceneHierarchyDiv></SceneHierarchyDiv>
      <SceneDetailsDiv></SceneDetailsDiv>
      <SelectedObjectDiv></SelectedObjectDiv>
    </SideBarDiv>
  );
}
