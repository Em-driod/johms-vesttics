import React, { useEffect, useRef, useState } from 'react';  
import { motion } from 'framer-motion';  

const KaftansSection = () => {  
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
    hidden: { opacity: 0, x: 30 }, // Slide from the right  
    visible: { opacity: 1, x: 0 },  
  };  

  const popUpVariants = {  
    hidden: { opacity: 0, scale: 0.8 }, // Pop-up effect  
    visible: { opacity: 1, scale: 1 },  
  };  

  return (  
    <section ref={sectionRef} className="relative bg-gradient-to-b from-black to-gray-900 min-h-screen text-white overflow-hidden">  
      {/* Hero Section */}  
      <div className="relative z-10 flex flex-col items-center text-center py-16 px-8">  
        <motion.h1  
          className="text-[70px] md:text-[100px] font-extrabold uppercase tracking-wide text-white"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
          transition={{ duration: 1.5 }} // Slower  
        >  
          Kaftans  
        </motion.h1>  
        <motion.p  
          className="text-lg md:text-2xl text-gray-300 mt-4"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
          transition={{ delay: 0.5, duration: 1.5 }} // Slower  
        >  
          Timeless elegance meets modern style. <br />  
          Discover the beauty of minimalism and flow.  
        </motion.p>  
      </div>  

      {/* Featured Kaftan */}  
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center mt-10 gap-10 px-8">  
        {/* Main Image */}  
        <motion.img  
          className="w-[300px] md:w-[400px] h-[450px] rounded-lg border-4 border-white shadow-xl hover:scale-105 transition-transform"  
          src="6.jpg"  
          alt="Featured Kaftan"  
          whileHover={{ scale: 1.05 }}  
          transition={{ duration: 0.5 }}  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={imageVariants}  
        />  

        {/* Text Beside Image */}  
        <div className="text-center md:text-left">  
          <motion.h2  
            className="text-4xl font-bold uppercase text-white"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={textVariants}  
            transition={{ duration: 1.5 }} // Slower  
          >  
            Bohemian Flow  
          </motion.h2>  
          <motion.p  
            className="text-gray-400 mt-4 text-lg"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={textVariants}  
            transition={{ duration: 1.5, delay: 0.2 }} // Slower  
          >  
            Experience the perfect blend of comfort and style with our exclusive kaftan designs. Crafted for the modern, free-spirited soul.  
          </motion.p>  
          <motion.button  
            className="mt-6 px-8 py-4 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"  
            whileHover={{ scale: 1.1 }}  
            transition={{ duration: 0.3 }}  
          >  
            Explore Collection  
          </motion.button>  
        </div>  
      </div>  

      {/* Kaftan Gallery */}  
      <div className="relative z-10 mt-16 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">  
        {[`7.jpg`, `9.jpg`, `8.jpg`].map((img, index) => (  
          <motion.div  
            key={index}  
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg"  
            whileHover={{ scale: 1.1 }}  
            transition={{ duration: 0.5 }}  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={imageVariants}  
          >  
            <img  
              src={img}  
              alt={`Kaftan ${index + 1}`}  
              className="w-full h-[300px] object-cover group-hover:opacity-80 transition duration-300"  
            />  
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">  
              <motion.span  
                className="text-white text-lg font-semibold uppercase"  
                initial="hidden"  
                animate={inView ? "visible" : "hidden"}  
                variants={popUpVariants}  
                transition={{ duration: 1 }} // Slower pop-up  
              >  
                View Details  
              </motion.span>  
            </div>  
          </motion.div>  
        ))}  
      </div>  

      {/* Call-to-Action */}  
      <div className="relative z-10 text-center mt-16">  
        <motion.button  
          className="px-10 py-4 bg-gradient-to-r from-gray-700 to-black text-white text-lg font-bold rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-800 transition"  
          whileHover={{ scale: 1.1 }}  
          transition={{ duration: 0.5 }}  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
        >  
          Shop the Full Collection  
        </motion.button>  
      </div>  
    </section>  
  );  
};  

export default KaftansSection;
