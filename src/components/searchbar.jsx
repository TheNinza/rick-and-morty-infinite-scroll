import styled from "styled-components";
import searchSvg from "../assets/search.svg";

const SearchbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primaryBlue};
  padding: 0.5rem 1.5rem;
`;

const InputField = styled.input`
  color: ${(props) => props.theme.colors.textPrimary};
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.2rem;
`;

const InputIcon = styled.img`
  height: 1.2rem;
  width: 1.2rem;
`;

const Searchbar = ({ setValue }) => {
  // handle debounce change
  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDebounceChange = debounce(handleChange, 500);

  return (
    <SearchbarContainer>
      <InputField
        type="text"
        onChange={(e) => handleDebounceChange(e)}
        placeholder="Search"
      />
      <InputIcon src={searchSvg} />
    </SearchbarContainer>
  );
};

export default Searchbar;
