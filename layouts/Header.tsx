import styled from "styled-components";
import ProfileSettings from "../components/ProfileSettings";
import SearchInput from "../components/SearchInput";
import MenuIcon from "../icons/MenuIcon";

const ContainerHeader = styled.header`
  position: sticky;
  top: 0;
  height: 3rem;
  /* background-color: red; */
`;

const WrapperNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  place-items: center;
  height: 100%;
  padding-inline: 1.2rem;
  justify-content: space-between;
`;

const WrapperActions = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
`;

const MenuIconEl = styled(MenuIcon)`
  height: 1.5rem;
  width: 1.5rem;
`;

const Header = () => {
  return (
    <ContainerHeader>
      <WrapperNavigation>
        <MenuIconEl />
        <SearchInput />
        <WrapperActions>
          <ProfileSettings />
        </WrapperActions>
      </WrapperNavigation>
    </ContainerHeader>
  );
};

export default Header;
