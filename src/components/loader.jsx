import styled from "styled-components";

const Svg = styled.svg`
  width: 60px;
  height: 60px;

  & circle {
    stroke: ${(props) => props.theme.colors.primaryBlue};
    stroke-width: 10;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;

      opacity: 1;
    }
    100% {
      stroke-dashoffset: 0;

      opacity: 0;
    }
  }
`;

const Loader = () => {
  return (
    <Svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="none" />
    </Svg>
  );
};
export default Loader;
