import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion"
import circlexmark from '../../assets/circle-xmark-regular.svg';
import doablescreen1 from '../../assets/Projects/Doable/Doable1.png';
import doablescreen2 from '../../assets/Projects/Doable/Doable2.png';
import doablescreen3 from '../../assets/Projects/Doable/Doable3.png';
import doablescreen4 from '../../assets/Projects/Doable/Doable4.png';
import doablescreen5 from '../../assets/Projects/Doable/Doable5.png';
import doablescreen6 from '../../assets/Projects/Doable/Doable6.png';
import githubIcon from '../../assets/icons/github-cat.svg';
import figmaLogo from '../../assets/icons/Figma-logo.svg';

const Doable = ({showDoable, setShowDoable}) => {

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
      height: 537px ;
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
      { showDoable && (
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
              <h2>Doable</h2>
              <img src={circlexmark} alt="" onClick={() => setShowDoable(false)} />
            </Title>
            <p>
              In order to enhance task organization efficiency, I designed and developed a web application from scratch. In this project, I utilized pure JavaScript for interactivity and combined this technology with HTML and CSS to create an intuitive and appealing interface. The application also features user authentication functionalities and employs local storage to store tasks and their statuses.
            </p>
            <p>
              This experience highlighted my ability to translate practical needs into functional and user-friendly digital solutions.
            </p>
            <Links>
              <div>
                <img style={{width:'30px'}} src={githubIcon} alt="" />
                <a href="https://github.com/codeableorg/doable-js-OscarCast22" target="blank">Repo</a>
              </div>
              <div>
                <img style={{width:'20px'}} src={figmaLogo} alt="" />
                <a href="https://www.figma.com/file/NNdVoofP8u1kqw3zXAIkek/Doable?type=design&node-id=0-1&mode=design&t=GC09ksiIpfi7H768-0" target="blank">Figma</a>
              </div>
            </Links>
            <ScreenGrid>
              <img src={doablescreen1} alt="" />
              <img src={doablescreen2} alt="" />
              <img src={doablescreen3} alt="" />
              <img src={doablescreen4} alt="" />
              <img src={doablescreen5} alt="" />
              <img src={doablescreen6} alt="" />
            </ScreenGrid>
          </Modal>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default Doable;
