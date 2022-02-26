import { gql, useQuery } from "@apollo/client";
import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import LastScrollAndPageContext from "../context/lastScrollAndPageContext";
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

const GET_LIST = gql`
  query getList($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
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

const CardContainerComponent = ({ page }) => {
  const { updateLastPage, lastPage } = useContext(LastScrollAndPageContext);
  const containerRef = useRef(null);

  const { data, error, loading } = useQuery(GET_LIST, {
    variables: {
      page,
    },
  });

  const characters = data?.characters?.results || [];
  const nextPage = data?.characters?.info?.next;

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;
    if (!nextPage) return;

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting && entries[0].boundingClientRect.y > 0) {
        updateLastPage(Math.max(nextPage, lastPage));
        observer.disconnect();
      }
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [nextPage, lastPage, updateLastPage]);

  if (loading)
    return (
      <HomePageLoader>
        <Loader />
      </HomePageLoader>
    );

  if (error) {
    return <div>No Data</div>;
  }

  return (
    <CardContainer ref={containerRef}>
      {characters.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </CardContainer>
  );
};

export default CardContainerComponent;
