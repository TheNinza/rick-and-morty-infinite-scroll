import { gql, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import EpisodeDropdows from "../components/episode-dropdown";
import Loader from "../components/loader";
import { PageContainer } from "../config/styled-components";

const CharacterPageLoader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const HeroSection = styled.div`
  width: 100%;
  display: flex;
  gap: 6rem;
  justify-content: space-evenly;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
    gap: 4rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CharacterImage = styled.img`
  height: 25rem;
  width: auto;
  border-radius: 1rem;
  object-fit: cover;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}px) {
    height: auto;
    width: 40%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 80%;
    margin: auto;
  }
`;

const CharacterBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const CharacterDetail = styled.div`
  font-size: 1.2rem;

  &.name {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    charactersByIds(ids: [$id]) {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        id
        dimension
      }
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
        characters {
          name
          id
        }
      }
    }
  }
`;

const Character = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_CHARACTER, {
    variables: {
      id,
    },
  });

  const character = data?.charactersByIds[0];

  console.log(character);

  if (!id) {
    navigate("/");
  }

  return (
    <PageContainer>
      {loading ? (
        <CharacterPageLoader>
          <Loader />
        </CharacterPageLoader>
      ) : error ? (
        <div>Error!</div>
      ) : (
        <>
          <HeroSection>
            <CharacterImage src={character.image} />
            <CharacterBasicInfo>
              {character?.name && (
                <CharacterDetail className="name">
                  {character.name}
                </CharacterDetail>
              )}
              {character?.gender && (
                <CharacterDetail>Gender: {character.gender}</CharacterDetail>
              )}

              {character?.status && (
                <CharacterDetail>Status: {character.status}</CharacterDetail>
              )}
              {character?.species && (
                <CharacterDetail>Species: {character.species}</CharacterDetail>
              )}
              {character?.type && (
                <CharacterDetail> Type: {character.type}</CharacterDetail>
              )}
              {character?.location?.name && (
                <CharacterDetail>
                  Location: {character.location.name}
                </CharacterDetail>
              )}

              {character?.origin?.dimension && (
                <CharacterDetail>
                  Origin: {character.origin.dimension}
                </CharacterDetail>
              )}
            </CharacterBasicInfo>
          </HeroSection>

          {character?.episode?.length > 0 && (
            <>
              <Title>Episodes</Title>
              {character.episode.map((episode) => (
                <EpisodeDropdows episode={episode} key={episode.id} />
              ))}
            </>
          )}
        </>
      )}
    </PageContainer>
  );
};

export default Character;
