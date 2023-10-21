import styled from '@emotion/styled'
import BurgerMenu from './BurgerMenu';

const NavSection = styled.section`
  display: none;
  backdrop-filter: blur(35px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 80;
  width: 100%;
  height: 70px;
  padding: 5%;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;

`

const Nav = styled.nav`

  li {
    float: left;
    text-align: center;
    width: 5em;
  }
`

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

function Navbar() {
    return (
      <>
      <BurgerMenu/>
      <NavSection>
        <MaxWidth>
          <p>Oscar</p>
          <Nav>
           <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
           </ul>
          </Nav>
        </MaxWidth>
      </NavSection>
      </>
    );
  }
  
  export default Navbar;
  