import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#000",
    textPrimary: "#fff",
    textSecondary: "rgba(255, 255, 255, 0.6)",
    primaryPurple: "#FF4ECD",
    primaryBlue: "#0070F3",
  },

  fontSizes: {
    tiny: ".75rem",
    xs: "0.875rem",
    base: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "2.25rem",
    xl: "3rem",
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },

  lineHeights: {
    xs: 1.25,
    sm: 1.5,
    md: 1.75,
    lg: 2,
    xl: 2.25,
    xxl: 2.5,
  },

  space: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },

  radii: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1400,
    xxl: 1920,
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .root{
    position: relative;
  }

  .container{
    width: ${(props) => props.theme.breakpoints.xl}px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: ${(props) => props.theme.breakpoints.xl}px) {
      width: 100%;
    }
    
  }

  .app{
    min-height: 100vh;
    position: relative;
    width: 100%;
  }


  /* Manually controlling autofill defaults */
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: white;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  #tsparticles{
    position: relative;
    z-index: -10 !important;
    pointer-events: none;
  }

`;

export const PageContainer = styled.div`
  width: ${(props) => props.theme.breakpoints.xl}px;
  min-height: 90vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${(props) => props.theme.space.xxl};

  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.xl}px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;
