import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion"
import circlexmark from '../../assets/circle-xmark-regular.svg';
import twetablescreen1 from '../../assets/Projects/Twetable/Twetable1.png';
import twetablescreen2 from '../../assets/Projects/Twetable/Twetable2.png';
import twetablescreen3 from '../../assets/Projects/Twetable/Twetable3.png';
import twetablescreen4 from '../../assets/Projects/Twetable/Twetable4.png';
import githubIcon from '../../assets/icons/github-cat.svg';
import figmaLogo from '../../assets/icons/Figma-logo.svg';

const Twetable = ({showTwetable, setShowTwetable}) => {

  const Backdrop = styled(motion.div)`
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000008a;
    z-index: 99;
  `
  const Modal = styled(motion.div)`
    max-width: 720px;
    margin: auto;
    padding: 15px 30px;
    background: #ebebeb;
    border-radius: 10px;

    h2{
      color: #e76a94;
      font-size: 2rem;
      margin-left: 20px;
    }

    p{
      color: black;
      font-weight: 500;
      text-align: left;
      margin: 20px;
    }
  `

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  }

  const modal = {
    hidden:{
      y: '-100vh',
      opacity: 0
    },
    visible:{
      y: '100px',
      opacity: 1,
      transition: { delay: 0.5 }
    }
  }

  const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img{
      height: 30px;
      cursor: pointer;
    }
  `

  const ScreenGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    grid-gap: 30px;
    width: -moz-available;          
    width: -webkit-fill-available; 

    img{
      min-width: 300px;
      height: 649px ;
      border-radius: 15px;
      box-shadow: -3px 3px 9px 1px rgba(0, 0, 0, 0.2);
    }
  `

  const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;

    div{
      display: flex;
      flex-direction: row;
      gap: 10px;

      a{
        font-weight: 600;
        text-decoration: none;
        color: #ff3f7f;
        :visited{
          color: #c83566;
        }
      }
    }
  `

  return (
    <AnimatePresence >
      { showTwetable && (
        <Backdrop
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <Modal
            variants={modal}
          >
            <Title>
              <h2>Twetable</h2>
              <img src={circlexmark} alt="" onClick={() => setShowTwetable(false)} />
            </Title>
            <p>
              I have developed a web application inspired by the functionality of Twitter, utilizing a mix of technologies including Ruby on Rails, HTML, and CSS. My approach covered all aspects of web development, from creating the interface to managing the database.
            </p>
            <p>
              I implemented the MVC {`(Model-View-Controller)`} design pattern and i create the database using PostgreSQL. I handled all CRUD operations using Ruby on Rails, including user identification and authentication, likes, tweets, retweets, and followers.
            </p>
            <p>
              This experience allowed me to strengthen my skills as a full-stack developer, tackling challenges in both the frontend and backend. I am proud of the outcome and excited about the possibilities this application offers to enhance the online user experience.
            </p>
            <Links>
              <div>
                <img style={{width:'30px'}} src={githubIcon} alt="" />
                <a href="https://github.com/codeableorg/tweetable-OscarCast22" target="blank">Repo</a>
              </div>
              <div>
                <img style={{width:'20px'}} src={figmaLogo} alt="" />
                <a href="https://www.figma.com/file/B7aydkPtCKfmlP8HxwwXng/Tweetable?type=design&node-id=2201-5682&mode=design&t=zz5c1BhBMhNQkW0G-0" target="blank">Figma</a>
              </div>
            </Links>
            <ScreenGrid>
              <img src={twetablescreen1} alt="" />
              <img src={twetablescreen2} alt="" />
              <img src={twetablescreen3} alt="" />
              <img src={twetablescreen4} alt="" />
            </ScreenGrid>
          </Modal>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Twetable;
