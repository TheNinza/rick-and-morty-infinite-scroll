import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoPath from "../assets/logornm.svg";

const NavbarComponent = styled.nav`
  box-shadow: rgb(2 1 1 / 10%) 0px 5px 20px -5px;
  background: rgb(0, 0, 0, 0.5);
  backdrop-filter: saturate(180%) blur(10px);
  height: 10vh;
  z-index: 9999;

  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
`;

const NavbarContainer = styled.div`
  width: ${(props) => props.theme.breakpoints.xl}px;
  max-width: ${(props) => props.theme.breakpoints.xl}px;
  height: 100%;

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.xl}px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

const NavbarGap = styled.div`
  height: 10vh;
`;

const Logo = styled.img`
  height: 80%;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Link = styled.a`
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.primaryPurple};
  padding: 0.5rem 1.5rem;
  transition: all 0.2s ease;

  @media (max-width: ${(props) => props.theme.breakpoints.xl}px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 0.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavbarComponent>
        <NavbarContainer>
          <Logo src={logoPath} alt="logo" onClick={() => navigate("/")} />
          <Links>
            <Link href="/">Home</Link>
            <Link
              href="https://github.com/TheNinza/rick-and-morty-infinite-scroll"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </Link>
          </Links>
        </NavbarContainer>
      </NavbarComponent>
      <NavbarGap />
    </>
  );
};

export default Navbar;
