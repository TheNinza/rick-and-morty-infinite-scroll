import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;

  width: 100%;
  aspect-ratio: 3/4;

  background: #111;

  border-radius: ${(props) => props.theme.radii.lg};

  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    aspect-ratio: 1;
  }
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBackDrop = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  backdrop-filter: saturate(180%) blur(10px);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  top: 80%;
  z-index: 1;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    top: 50%;
  }
`;

const CardTitle = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  white-space: nowrap;
`;

const CardSubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const CardSubtitle = styled.h4`
  font-weight: 400;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const KnowMoreButton = styled(Link)`
  display: block;
  position: relative;
  width: fit-content;
  margin: auto;
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;

  height: 2.5rem;

  background-clip: content-box, border-box;
  background-image: linear-gradient(to right, #000, #000),
    linear-gradient(
      to right,
      ${(props) => props.theme.colors.primaryPurple} 0%,
      ${(props) => props.theme.colors.primaryBlue} 100%
    );
  background-color: transparent;
  padding: 1px;

  border-radius: ${(props) => props.theme.radii.sm};
  transition: all 0.2s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }

  & > span {
    padding: 0.5rem 1rem;
  }
`;

const Card = ({ item }) => {
  return (
    <CardContainer>
      <CardImage src={item.image} />
      <CardBackDrop>
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitleContainer>
          <CardSubtitle>{item.species}</CardSubtitle>
          <CardSubtitle>{item.gender}</CardSubtitle>
        </CardSubtitleContainer>
        <CardSubtitleContainer>
          <CardSubtitle>
            Created: {moment(item.created).format("MMM, DD YYYY")}
          </CardSubtitle>
        </CardSubtitleContainer>
        <KnowMoreButton to={`/character/${item.id}`}>
          <span>Know More</span>
        </KnowMoreButton>
      </CardBackDrop>
    </CardContainer>
  );
};

export default Card;
