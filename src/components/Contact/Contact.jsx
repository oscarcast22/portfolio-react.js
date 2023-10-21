import styled from "@emotion/styled";
import ContactForm from "./ContactForm";

function Contact() {
  return(
    <ContactSection>
      <MaxWidth>
        <ContactForm/>
      </MaxWidth>
    </ContactSection>
  )
}

const ContactSection = styled.section`
  padding: 5%;
  padding-bottom: 5rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #7a7a7a;
  text-align: center;

  h1 {
    font-family: 'Ubuntu Mono';
    font-size: 1.8rem;
    font-weight: 400;
    filter: drop-shadow( -2px .7px 1.6px #000000a1 );
    margin-bottom: 1rem;
  }
`

const MaxWidth = styled.div`
  width: 100%;
  max-width: 1200px;
`

export default Contact