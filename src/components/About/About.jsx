import styled from '@emotion/styled';
import Reveal from "../Animations/Reveal";
import { motion } from "framer-motion";
import Skills from './Skills';

const AboutSection = styled.section`
  padding: 5%;
  padding-bottom: 5.5rem;
  padding-top: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #4d4d4d;
  z-index: 0;

  h2{
    align-self: center;
  }
`

const Curve = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 1;
  bottom: -1px;

  svg {
    position: relative;
    display: block;
    width: calc(122% + 1.3px);
    height: 100px;
    filter: drop-shadow( 10px 0px .25rem #00000038 );
  }
`

const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  align-items: center;
  margin-top: 1rem;
  z-index: 99;
  @media (max-width: 820px) {
    flex-direction: column;

  }

  p {
    background-image: linear-gradient(
      90deg, rgba(255,255,255,1) 0%,
      #c2fff6 50%, rgba(255,255,255,1) 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 4s linear infinite;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 600;
    filter: drop-shadow( -2px .7px 1.6px #000000a1 );
  }


@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`

const Photo = styled(motion.img)`
  width: 300px;
  height: 350px;
  object-fit: cover;
  border-radius: 5%;
  box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    width: 290px;
    height: 300px;

  }
`

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
  z-index: 0;
`

const Title = styled.h2`
  font-family: 'Ubuntu Mono';
  font-size: 1.8rem;
  font-weight: 400;
  filter: drop-shadow( -2px .7px 1.6px #000000a1 );
`
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export default function About () {

  return (
    <>
      <AboutSection>
        <MaxWidth>
          <Reveal>
            <Title>
              About me:
            </Title>
          </Reveal>
          <Presentation>
            <Photo 
              whileHover={{scale: 1.03}}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src='https://i.ibb.co/T2nZGyg/Oscar.jpg'alt="" 
              />
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <motion.p
                whileHover={{scale: 1.03}}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Passionate about technology, collaborative, interested to work alongside a dynamic team, curious, innovative and eager to learn new technologies. Currently
                looking for new professional challenges in backend development projects with big impact in human life.
              </motion.p>
              <Skills/>
            </div>
          </Presentation>
        </MaxWidth>
        <Curve>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill: '#5f5f5f'}}></path>
          </svg>
        </Curve>
      </AboutSection>
      
    </>
  )
}