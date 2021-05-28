import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  padding-top: 3rem;
`;

export const RightSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
    margin: 0 auto;
  }
`;

export const LeftSection = styled.div`
  width: 60%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
