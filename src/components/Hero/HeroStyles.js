import styled from 'styled-components'


export const HeroSection = styled.section`
display: flex;
flex-direction: row;
padding: 2rem;
padding-top: 3rem;
`

export const RightSection = styled.div`
width: 40%;
display:flex;
justify-content: center;
padding: 1rem;

`

export const LeftSection = styled.div`
width: 60%;
`

export const HeroBG = styled.img`
`

export const HeroSponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
`

export const HeroSponsorLogo = styled.img`
  width: 1fr;
  height: 80px; 

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 50px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    height: 32px;
    flex-basis: 33%;
    margin-bottom: 8px;
  }
`
