import styled from "styled-components";
import SearchIcon from "../icons/SearchIcon";

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid hsl(0, 0%, 18.82%);
  border-radius: 10rem;
  /* padding-left: 1rem; */
  place-items: center;
  height: 75%;
  margin-block: 2rem;
`;

const InputWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  :focus-within {
    border: 1px solid aquamarine;
  }
`;

const SearchButtonIcon = styled(SearchIcon)`
  height: 1.3rem;
  width: 1.8rem;
  fill: transparent;
`;

const SearchButton = styled.button`
  all: unset;
  height: 100%;
  border-radius: inherit;
  padding-inline: 1rem;
  background-color: hsla(0, 0%, 100%, 0.08);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Input = styled.input`
  all: unset;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  margin-left: 1rem;
`;

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <InputWrapper>
        <Input placeholder="Search" />
      </InputWrapper>
      <SearchButton type="button">
        <SearchButtonIcon />
      </SearchButton>
    </SearchInputContainer>
  );
};

export default SearchInput;
