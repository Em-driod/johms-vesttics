import React, { useEffect, useRef, useState } from 'react';  
import { motion } from 'framer-motion';  

const ClothingSection = () => {  
  const [inView, setInView] = useState(false);  
  const sectionRef = useRef(null);  

  // Check if the section is in the viewport  
  const handleScroll = () => {  
    if (sectionRef.current) {  
      const rect = sectionRef.current.getBoundingClientRect();  
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;  
      setInView(isInView);  
    }  
  };  

  useEffect(() => {  
    window.addEventListener('scroll', handleScroll);  
    return () => {  
      window.removeEventListener('scroll', handleScroll);  
    };  
  }, []);  

  // Animation variants  
  const textVariants = {  
    hidden: { opacity: 0, y: 50 },  
    visible: { opacity: 1, y: 0 },  
  };  

  const imageVariants = {  
    hidden: { opacity: 0, y: 30 },  
    visible: { opacity: 1, y: 0 },  
  };  

  return (  
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-black to-gray-900 text-gray-200">  
      {/* Section Wrapper */}  
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-16">  
        
        {/* Shirts/Vintage Section */}  
        <div className="w-full md:w-1/2 text-center md:text-left">  
          <motion.h2  
            className="text-4xl font-bold uppercase tracking-wide mb-6"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={textVariants}  
            transition={{ duration: 0.5, type: "spring" }}  
          >  
            Shirts / <span className="text-red-500">Vintage</span>  
          </motion.h2>  
          <div className="grid grid-cols-2 gap-6">  
            {/* Main Shirt Image */}  
            <motion.img  
              className="col-span-2 w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"  
              src="13.jpg"  
              alt="Shirt 1"  
              whileHover={{ scale: 1.05 }}  
              initial="hidden"  
              animate={inView ? "visible" : "hidden"}  
              variants={imageVariants}  
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}  
            />  
            {/* Smaller Images */}  
            <motion.img  
              className="w-full h-[200px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"  
              src="14.jpg"  
              alt="Shirt 2"  
              whileHover={{ scale: 1.05 }}  
              initial="hidden"  
              animate={inView ? "visible" : "hidden"}  
              variants={imageVariants}  
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}  
            />  
            <motion.img  
              className="w-full h-[200px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"  
              src="15.jpg"  
              alt="Shirt 3"  
              whileHover={{ scale: 1.05 }}  
              initial="hidden"  
              animate={inView ? "visible" : "hidden"}  
              variants={imageVariants}  
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}  
            />  
          </div>  
        </div>  

        {/* Divider */}  
        <div className="hidden md:block w-[2px] bg-gradient-to-b from-red-500 to-transparent h-full"></div>  

        {/* Cargo Pants/Trousers Section */}  
        <div className="w-full md:w-1/2 text-center md:text-left">  
          <motion.h2  
            className="text-4xl font-bold uppercase tracking-wide mb-6"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={textVariants}  
            transition={{ duration: 0.5, type: "spring" }}  
          >  
            Cargo Pants / <span className="text-red-500">Trousers</span>  
          </motion.h2>  
          <div className="grid grid-cols-2 gap-6">  
            {/* Main Cargo Pant Image */}  
            <motion.img  
              className="col-span-2 w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"  
              src="16.jpg"  
              alt="Cargo Pant"  
              whileHover={{ scale: 1.05 }}  
              initial="hidden"  
              animate={inView ? "visible" : "hidden"}  
              variants={imageVariants}  
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}  
            />  
            {/* Smaller Images */}  
            <motion.img  
              className="w-full h-[200px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"  
              src="17.jpg"  
              alt="Trouser 2"  
              whileHover={{ scale: 1.05 }}  
              initial="hidden"  
              animate={inView ? "visible" : "hidden"}  
              variants={imageVariants}  
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}  
            />  
            <motion.img  
              className="w-full h-[200px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"  
              src="18.jpg"  
              alt="Trouser 3"  
              whileHover={{ scale: 1.05 }}  
              initial="hidden"  
              animate={inView ? "visible" : "hidden"}  
              variants={imageVariants}  
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}  
            />  
          </div>  
        </div>  
      </div>  

      {/* Call to Action */}  
      <div className="text-center mt-16">  
        <motion.button  
          className="px-8 py-4 bg-red-500 text-white font-semibold text-lg uppercase rounded-lg shadow-lg hover:bg-red-600 transition"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
          transition={{ duration: 0.5, delay: 0.4, type: "spring" }}  
        >  
          Explore Full Collection  
        </motion.button>  
      </div>  
    </section>  
  );  
};  

export default ClothingSection;