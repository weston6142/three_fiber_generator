import styled from "styled-components";

const TopBarDropDown = styled.div`
  width: 100%;
  height 3%;
  background-color: #000000;
  display: flex;
  flex-direction: row;
   align-items: center;

    

`;

/* The container <div> - needed to position the dropdown content */
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

/* Dropdown Content (Hidden by Default) */
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

/* Links inside the dropdown */
const DropdownLinks = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;

const DropdownButton = styled.button`
  background-color: black;
  color: grey;
  cursor: pointer;
  border: none;
`;

//   /* Change color of dropdown links on hover */
//   .dropdown-content a:hover {background-color: #ddd;}

//   /* Show the dropdown menu on hover */
//   .dropdown:hover .dropdown-content {display: block;}

//   /* Change the background color of the dropdown button when the dropdown content is shown */
//   .dropdown:hover .dropbtn {background-color: #3e8e41;}

export default function TopBar() {
  return (
    <TopBarDropDown>
      <Dropdown>
        <DropdownButton>File</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Edit</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Add</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Play</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Examples</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>View</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
      <Dropdown>
        <DropdownButton>Help</DropdownButton>
        <DropdownContent>
          <DropdownLinks href="#">Link 1</DropdownLinks>
          <DropdownLinks href="#">Link 2</DropdownLinks>
          <DropdownLinks href="#">Link 3</DropdownLinks>
        </DropdownContent>
      </Dropdown>
    </TopBarDropDown>
  );
}
