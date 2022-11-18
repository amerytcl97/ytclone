import { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../icons/MenuIcon";

const Button = styled.button`
  all: unset;
  padding: 0.7rem;
  border-radius: 100%;
  display: flex;
  place-items: center;
  place-content: center;
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 18.82%);
  }
`;

const MenuButtonIcon = styled(MenuIcon)`
  width: 1.4rem;
  height: 1.4rem;
`;

const MenuButton = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  return (
    <Button type="button" onClick={() => setShowSideBar((o) => !o)}>
      <MenuButtonIcon />
    </Button>
  );
};

export default MenuButton;
