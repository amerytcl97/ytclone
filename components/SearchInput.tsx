import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../icons/SearchIcon";
import XIcon from "../icons/XIcon";

const WrapperSearchInput = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  border-radius: 10rem;
  border: 1px solid hsl(0, 0%, 18.82%);
  height: 2.2rem;
  position: relative;
`;

const SearchIconButton = styled(SearchIcon)`
  height: 1.4rem;
  width: 1.2rem;
  fill: transparent;
`;

const SearchButton = styled.button`
  all: unset;
  height: 100%;
  padding-inline: 1.5rem;
  border-radius: inherit;
  display: flex;
  justify-items: center;
  place-items: center;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: hsla(0, 0%, 100%, 0.08);
  cursor: pointer;
`;

const SearchIconDummy = styled(SearchIcon)`
  height: 1rem;
  width: 1rem;
  fill: transparent;
  display: none;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  place-items: center;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  padding-left: 1rem;
  padding-right: 0.2rem;
  height: 100%;
  position: relative;
  :focus-within {
    border: 1px solid #2563eb;
    ${SearchIconDummy} {
      display: block;
    }
  }
`;

const SearchCancelButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const Input = styled.input`
  all: unset;
  flex: 1;
  padding-left: 1rem;
  padding-right: 3.5rem;
  height: 100%;
  font-size: 13px;
  max-width: 25rem;
  width: 25rem;
`;

const SearchCancelIcon = styled(XIcon)`
  height: 1.2rem;
  width: 1.2rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin-top: 7px;
  margin-right: 4px;
`;

const SearchInput = () => {
  const [query, setQuery] = useState<string>("");

  const clearSearchQuery = () => {
    setQuery("");
  };

  return (
    <WrapperSearchInput>
      <InputContainer>
        <SearchIconDummy />
        <Input
          placeholder=" "
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
        />
        {query && (
          <SearchCancelButton onClick={clearSearchQuery}>
            <SearchCancelIcon />
          </SearchCancelButton>
        )}
      </InputContainer>
      <SearchButton title="Search">
        <SearchIconButton />
      </SearchButton>
    </WrapperSearchInput>
  );
};

export default SearchInput;
