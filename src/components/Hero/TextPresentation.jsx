import Reveal from "../Animations/Reveal"
import TextSpan from "./TextSpan"
import styled from '@emotion/styled'
import { colors } from "../../styles/colors"

const Word = styled.div`
  display: inline-block;
`

const WordBold = styled.div`
  display: inline-block;
  font-weight: 600;
  color: ${colors.aqua};

  span:hover {
    color: ${colors.white};
    transition: color 0.2s ease-in;
    cursor: default;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  max-width: 1200px;

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 2.2rem;
  }
`


function Presentation() {
  const title1 = `Hey, `.split('');
  const title2 = `i'm `.split('');
  const title3 = `Oscar.`.split('');
  const subtitle1 = `I'm `.split('');
  const subtitle2 = `a `.split('');
  const subtitle3 = `Full `.split('');
  const subtitle4 = `Stack `.split('');
  const subtitle5 = `Developer.`.split('');

  return (
    <>
    <TextBox>
    <Reveal>
    <h1>
      <Word>
        {title1.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      <Word>
        {title2.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      <Word>
        {title3.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
    </h1>
    </Reveal>
    <h2>
      <Reveal>
      <Word>
        {subtitle1.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      <Word>
        {subtitle2.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      <WordBold>
      <Word>
        {subtitle3.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      <Word>
        {subtitle4.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      <Word>
        {subtitle5.map((letter, index) => (
          <TextSpan key={index}>
            {letter === " " ? "\u00A0" : letter }
          </TextSpan>
        ))}
      </Word>
      </WordBold>
      </Reveal>
    </h2>
    </TextBox>
    </>
  );
}

export default Presentation;