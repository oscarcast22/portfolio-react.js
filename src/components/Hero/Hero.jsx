import styled from '@emotion/styled'
import { colors } from '../../styles/colors'
import Presentation from './TextPresentation'


const Container = styled.section`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;
  margin: auto;
  position: relative;
  padding: 5%;
  padding-top: 60px;
  background-color: #1d1d1df2;


  h1 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 5rem;
    line-height: 6rem;
    font-weight: 600;
  }

  h2 {
    color: ${colors.white};
    align-self: flex-start;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 400;
    flex-direction: row;
  }
  
  p {
    font-size: 1.2rem;
  }

  p:hover {
    text-shadow: 0 0 20px ${colors.aqua};
    transition: text-shadow 0.2s ease-in;
    cursor: default;
  }

  span {
    display: inline-block;
  }

  span:hover {
    color: ${colors.aqua};
    transition: color 0.2s ease-in;
    cursor: default;
  }
`

const Dotgrid = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, #050505 10%, transparent 11%);
  background-size: 2em 2em;
  opacity: 0.95;
`

const Curve = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 1;

  svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 130px;
  }
`

function Hero() {

  return (
    <>
      <Container>
        <div style={{width: '100%', maxWidth: '1200px', margin: 'auto', zIndex: 3}}>
          <Dotgrid></Dotgrid>
          <Presentation/>
        </div>
        <Curve>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill: '#4d4d4d'}}></path>
          </svg>
        </Curve>
      </Container>
    </>
  )
}

export default Hero