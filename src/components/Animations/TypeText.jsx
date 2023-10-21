import { useEffect } from "react";
import styled from '@emotion/styled';
import { useAnimation, motion, useInView } from "framer-motion";

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function AnimatedTitle() {
  const text = 'Some of my skills'; // This would normally be passed into this component as a prop!
  
  const ctrls = useAnimation();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <>
      <Title>
        {text.split("").map((letter, index) => (
          <Character 
            key={index}
            ref={ref}
            initial='hidden'
            animate={ctrls}
            variants={characterAnimation}
          >
            {letter}
          </Character>
        ))}
      </Title>
    </>
  )
}