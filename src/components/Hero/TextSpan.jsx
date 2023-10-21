import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  
  const rubberBand = () =>{
    controls.start({
        transform: [
            'scale3d(1,1,1)',
            'scale3d(1.3,.45,1)',
            'scale3d(.65,1.15,1)',
            'scale3d(1.15,.75,1)',
            'scale3d(.8,1.04,1)',
            'scale3d(1,1,1)', 
        ],
    })
    setIsPlaying(true)
  }
  
  return (  
    <motion.span
    animate = {controls}
    onMouseOver={() => {
        if(!isPlaying){
            rubberBand();
        }
    }}
    onAnimationComplete={()=> setIsPlaying(false)}>
      {children}
    </motion.span>
  )
}

export default TextSpan;