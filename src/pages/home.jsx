import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import CardContainerComponent from "../components/card-container";
import Searchbar from "../components/searchbar";
import SearchResult from "../components/searchResult";

import { PageContainer } from "../config/styled-components";
import LastScrollAndPageContext from "../context/lastScrollAndPageContext";

const SearchField = styled.div`
  width: 20rem;
  height: 3rem;
  margin: 0 auto 2rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    margin: 1rem auto 2rem auto;
  }
`;

const Home = () => {
  const { lastPage } = useContext(LastScrollAndPageContext);

  const [search, setSearch] = useState("");
  const isListVisible = !search.length;

  // memoize the list of separate CardContainer components
  const generateList = useMemo(() => {
    const list = [];
    for (let i = 1; i <= lastPage; i++) {
      list.push(<CardContainerComponent key={i} page={i} />);
    }
    return list;
  }, [lastPage]);

  const createSearchResult = useMemo(() => {
    return <SearchResult searchString={search} />;
  }, [search]);

  return (
    <PageContainer>
      <SearchField>
        <Searchbar setValue={setSearch} />
      </SearchField>
      {isListVisible ? generateList : createSearchResult}
    </PageContainer>
  );
};

export default Home;
