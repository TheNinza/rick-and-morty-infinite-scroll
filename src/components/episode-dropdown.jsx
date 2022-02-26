import { useState } from "react";
import styled from "styled-components";

const EpisodeContainer = styled.div`
  width: 100%;
  backdrop-filter: saturate(180%) blur(10px);
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${(props) => props.theme.radii.lg};
  margin-bottom: 1rem;
  cursor: pointer;
`;

const CharacterTitle = styled.h3`
  margin-top: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  white-space: nowrap;
`;

const EpisodeName = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

const EpisodeAirDate = styled.p`
  font-size: 1.2rem;
`;

const EpisodeCharacterContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
`;

const EpisodeCharacter = styled.div`
  font-size: 1.2rem;
`;

const EpisodeDropdows = ({ episode }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <EpisodeContainer onClick={() => setOpen(!open)}>
        <EpisodeName>{episode.name}</EpisodeName>
        <EpisodeAirDate>{episode.air_date}</EpisodeAirDate>
        {open && (
          <>
            <CharacterTitle>Characters:</CharacterTitle>
            <EpisodeCharacterContainer>
              {episode.characters.map((character) => (
                <EpisodeCharacter key={character.id}>
                  {character.name}
                </EpisodeCharacter>
              ))}
            </EpisodeCharacterContainer>
          </>
        )}
      </EpisodeContainer>
    </>
  );
};

export default EpisodeDropdows;
