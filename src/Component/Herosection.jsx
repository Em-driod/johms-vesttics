import React, { useEffect, useRef, useState } from "react";  
import { motion } from "framer-motion";  

const HeroSection = () => {  
  const [inView, setInView] = useState(false);  
  const sectionRef = useRef(null);  

  // Check if the section is in the viewport  
  const handleScroll = () => {  
    const rect = sectionRef.current.getBoundingClientRect();  
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;  
    setInView(isInView);  
  };  

  useEffect(() => {  
    window.addEventListener("scroll", handleScroll);  
    return () => {  
      window.removeEventListener("scroll", handleScroll);  
    };  
  }, []);  

  // Animation variants  
  const imageVariants = {  
    hidden: { opacity: 0, x: 100 }, // Slide from the right  
    visible: { opacity: 1, x: 0 },  
  };  

  const textVariants = {  
    hidden: { opacity: 0, y: 50 }, // Lift effect  
    visible: { opacity: 1, y: 0 },  
  };  

  const popUpVariants = {  
    hidden: { opacity: 0, scale: 0.8 }, // Pop-up effect  
    visible: { opacity: 1, scale: 1 },  
  };  

  return (  
    <section ref={sectionRef} className="relative h-[600px] overflow-hidden">  
      {/* Top Background */}  
      <div className="absolute inset-0 bg-[url('/20.jpg')] bg-cover bg-center h-[50%] z-0"></div>  

      {/* Bottom Background */}  
      <div className="absolute inset-0 top-[50%] bg-[url('/23.jpg')] bg-cover bg-center h-[50%] z-0"></div>  

      {/* Overlay Content */}  
      <div className="relative z-10 flex justify-center items-center h-full">  
        {/* Three Images Side by Side */}  
        <div className="flex space-x-4">  
          <motion.div  
            className="w-[300px] h-[400px] bg-[url('/2.jpg')] bg-cover bg-center rounded shadow-lg"  
            title="Image 1"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={imageVariants}  
            transition={{ duration: 1, type: "spring", stiffness: 100 }} // Slower  
          ></motion.div>  
          <motion.div  
            className="w-[300px] h-[400px] bg-[url('/3.jpg')] bg-cover bg-center rounded shadow-lg"  
            title="Image 2"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={imageVariants}  
            transition={{ duration: 1, type: "spring", stiffness: 100 }} // Slower  
          ></motion.div>  
          <motion.div  
            className="w-[300px] h-[400px] bg-[url('/4.jpg')] bg-cover bg-center rounded shadow-lg"  
            title="Image 3"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={imageVariants}  
            transition={{ duration: 1, type: "spring", stiffness: 100 }} // Slower  
          ></motion.div>  
        </div>  
      </div>  

      {/* Text Overlay */}  
      <motion.div  
        className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center text-white"  
        initial="hidden"  
        animate={inView ? "visible" : "hidden"}  
        variants={popUpVariants} // Use pop-up variants  
        transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }} // Slower  
      >  
        <motion.h1  
          className="text-[50px] font-bold uppercase bg-black/50"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
          transition={{ duration: 1, delay: 0.3 }} // Slower lift effect  
        >  
          Jhoms Vestis  
        </motion.h1>  
        <motion.p  
          className="text-[20px] italic mt-4 px-4 max-w-[600px] bg-black/50 py-2 rounded"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
          transition={{ duration: 1, delay: 0.4 }} // Slower lift effect  
        >  
          A brand that sells not just outfits but a trend!  
        </motion.p>  
      </motion.div>  
    </section>  
  );  
};  

export default HeroSection;

