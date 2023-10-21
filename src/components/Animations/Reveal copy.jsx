import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { colors } from "../../styles/colors";

 const Reveal = ({ children, width = "fit-content", slideAnimation = true }) => {

  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

   useEffect(() => {
    if (isInView) {
      slideAnimation && slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideAnimation && slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls, slideAnimation]);
   return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {slideAnimation && (
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.3, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: colors.aqua,
            zIndex: 20,
          }}
        />
      )}
    </div>
  );
};
 export default Reveal;
 