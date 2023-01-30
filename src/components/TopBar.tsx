import { useEffect, useState } from "react";
import styled from "styled-components";
import * as Three from "three";

const TopBarDropDown = styled.div`
  width: 100%;
  height 3%;
  background-color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;

    

`;

/* Links inside the dropdown */
const DropdownLink = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.5em;
`;

const DropdownButton = styled.button`
  background-color: black;
  color: grey;
  cursor: pointer;
  border: none;
`;

/* Dropdown Content (Hidden by Default) */
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${DropdownLink} {
    background-color: black;
    color: grey;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  &:hover ${DropdownLink} {
    background-color: black;
  }
`;

/* The container <div> - needed to position the dropdown content */
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
  &:hover ${DropdownButton} {
    background-color: black;
  }
`;

interface TopBarProps {
  addMesh: (geometry: any) => void;
}

export default function TopBar(props: TopBarProps) {
  const [geometries, setGeometries] = useState<any>([]);
  useEffect(() => {
    const classes = Object.keys(Three);
    setGeometries(classes.filter((c) => c.includes("Geometry")));
  }, []);
  return (
    <TopBarDropDown>
      <Dropdown>
        <DropdownButton>File</DropdownButton>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Edit</DropdownButton>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Add</DropdownButton>
        <DropdownContent>
          {geometries.map((g: any) => (
            <DropdownLink key={g} onClick={() => props.addMesh(g)} href="#">
              {g}
            </DropdownLink>
          ))}
          {/* // <DropdownLink href="#">Link 1</DropdownLink>
          // <DropdownLink href="#">Link 2</DropdownLink>
          // <DropdownLink href="#">Link 3</DropdownLink> */}
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Play</DropdownButton>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Examples</DropdownButton>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>View</DropdownButton>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Help</DropdownButton>
        <DropdownContent>
          <DropdownLink href="#">Link 1</DropdownLink>
          <DropdownLink href="#">Link 2</DropdownLink>
          <DropdownLink href="#">Link 3</DropdownLink>
        </DropdownContent>
      </Dropdown>
    </TopBarDropDown>
  );
}
