import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function FadeIn({ children }) {
  const control = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if(inView) {
      control.start("visible")
    }
    if(!inView) {
      control.start("hidden")
    }
  }, [control, inView])


  const variants = {
    hidden: {opacity:0, x: -150},
    visible: {opacity: 1, x: 0}
  };
  
  return (
    <motion.div style={{width:"100%"}}
      ref={ref}
      animate={control}
      initial="hidden"
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
}