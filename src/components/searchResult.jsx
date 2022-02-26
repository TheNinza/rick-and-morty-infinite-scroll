import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Card from "./card";
import Loader from "./loader";

const CardContainer = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1.5rem;
  grid-auto-flow: dense;
  margin-bottom: 1.5rem;
`;

const HomePageLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SEARCH_RESULT_QUERY = gql`
  query searchResult($search: String!) {
    characters(filter: { name: $search }) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

const SearchResult = ({ searchString }) => {
  const { data, error, loading } = useQuery(SEARCH_RESULT_QUERY, {
    variables: {
      search: searchString,
    },
  });
  const characters = data?.characters?.results || [];

  if (loading)
    return (
      <HomePageLoader>
        <Loader />
      </HomePageLoader>
    );

  if (error) {
    return <div>No Data Found</div>;
  }

  return (
    <>
      <h2>Search Results:</h2>
      <CardContainer>
        {characters.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </CardContainer>
    </>
  );
};

export default SearchResult;
