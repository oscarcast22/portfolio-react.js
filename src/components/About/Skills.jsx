import styled from "@emotion/styled";
import { motion } from "framer-motion";
import reactLogo from '../../assets/icons/react.svg';
import nextLogo from '../../assets/icons/next-js.svg';
import javascriptLogo from '../../assets/icons/JavaScript_logo.svg';
import postgresqlLogo from '../../assets/icons/Postgresql-icon.svg';
import rubyLogo from '../../assets/icons/Ruby_logo.png';
import rubyonrailsLogo from '../../assets/icons/Ruby_On_Rails_Logo.svg';
import htmlLogo from '../../assets/icons/HTML5.svg';
import cssLogo from '../../assets/icons/CSS3_logo.svg';
import apiIcon from '../../assets/icons/api.png';
import dockerIcon from '../../assets/icons/docker-icon.svg';
import githubIcon from '../../assets/icons/github-cat.svg';
import sqlIcon from '../../assets/icons/sql-database.svg';

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(55px, 1fr));
  padding: .5rem;
  gap: 1rem;
  width: 100%;  
  width: -webkit-fill-available; 
  z-index: 99;
  position: relative;

`

const Skill = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: .1rem;
  width: 50px;
  z-index: 99;
  margin: auto;

  img {
    height: 40px;
    width: 40px;
    filter: drop-shadow( -2px 1px 1.5px #00000059 );
  }
  
  p {
    font-size: 1rem;
  }
`

const SkillsSection = styled(motion.div)`
  background-color: #686767;
  border-radius: 1rem;
  text-align: center;
  padding-top: .3rem;
  padding-bottom: .3rem;
  max-width: 727px;
  margin: auto;
  margin-top: 1.5rem;
  width: 100%;
  box-shadow: -2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  h2 {
    font-family: 'Ubuntu Mono';
    filter: drop-shadow( -2px .7px 1.6px #000000a1 );
  }
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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function Skills() {

  const text = 'Some of my skills'

  return(
    <SkillsSection
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
      <h2>
        <motion.div>
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </h2>
      <Grid>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={reactLogo} alt="React.js"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={nextLogo} alt="Next.js" style={{scale: '1.2'}}/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={javascriptLogo} alt="Javascript"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={rubyLogo} alt="Ruby"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={rubyonrailsLogo} alt="Ruby on rails"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={postgresqlLogo} alt="PostgreSQL"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={htmlLogo} alt="PostgreSQL"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={cssLogo} alt="PostgreSQL"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={dockerIcon} alt="PostgreSQL"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={githubIcon} alt="PostgreSQL"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={apiIcon} alt="PostgreSQL"/>
        </Skill>
        <Skill whileHover={{scale: 1.35}} variants={item}>
          <img src={sqlIcon} alt="PostgreSQL"/>
        </Skill>
      </Grid>
    </SkillsSection>
  )
}

export default Skills