import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import  Navigation from "./Navigation";
import styled from "@emotion/styled";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const SideBar = styled(motion.div)`
  position: absolute;
  backdrop-filter: blur(35px);
  top: 0;
  left: 0;
  bottom: 0;
  width: 330px;
`

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 90;

  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 18px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
  }
  
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  
  ul {
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }
  
  li {
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

function BurgerMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <Nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      style={{
        height: isOpen ? "100vh" : `80px`
      }}
    >
      <SideBar variants={sidebar} />
      <Navigation isOpen={isOpen}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </Nav>
  );
}

export default BurgerMenu
