import styled from "styled-components";
import MenuButton from "../components/menu/MenuButton";
import Notification from "../components/Notifications";
import ProfileSettings from "../components/ProfileSettings";
import SearchInput from "../components/SearchInput";
import MenuIcon from "../icons/MenuIcon";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  height: 3.3rem;
  /* background-color: red; */
`;

const HeaderNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  place-items: center;
  height: 100%;
  padding-inline: 1.2rem;
  justify-content: space-between;
`;

const HeaderRightActions = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  gap: 1.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNavigation>
        <MenuButton />
        <SearchInput />
        <HeaderRightActions>
          <Notification />
          <ProfileSettings />
        </HeaderRightActions>
      </HeaderNavigation>
    </HeaderContainer>
  );
};

export default Header;
