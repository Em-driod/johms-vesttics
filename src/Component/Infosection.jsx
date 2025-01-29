import React, { useEffect, useRef, useState } from 'react';  
import { motion } from 'framer-motion';  

const InfoSection = () => {  
  const [inView, setInView] = useState(false);  
  const sectionRef = useRef(null);  

  // Check if the section is in the viewport  
  const handleScroll = () => {  
    const rect = sectionRef.current.getBoundingClientRect();  
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;  
    setInView(isInView);  
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
    hidden: { opacity: 0, x: -100 },  
    visible: { opacity: 1, x: 0 },  
  };  

  return (  
    <section ref={sectionRef} className="relative bg-cover bg-center bg-[url('/12.jpg')] min-h-screen text-white overflow-hidden">  
      {/* Gradient Overlay */}  
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>  

      {/* Hero Section */}  
      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between px-6 sm:px-8 pt-12 md:pt-20 gap-8">  
        {/* Circular Image */}  
        <motion.div  
          className="relative flex-shrink-0"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={imageVariants}  
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}  
        >  
          <img  
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-xl border-4 border-white hover:scale-105 transition-transform"  
            src="/14.jpg"  
            alt=""  
          />  
          <div className="absolute inset-0 flex items-center justify-center">  
            <p className="text-[20px] bg-black/50 sm:text-[25px] md:text-[30px] font-bold tracking-widest text-white text-center leading-tight">  
              Welcome to <span className="text-gray-300">JHOMS</span>  
              <br />  
              <span className="italic text-gray-400 text-[16px] sm:text-[20px]">  
                Where Fashion Meets Art  
              </span>  
            </p>  
          </div>  
        </motion.div>  

        {/* Text Content */}  
        <motion.div  
          className="max-w-full md:max-w-[600px] text-center md:text-left"  
          initial="hidden"  
          animate={inView ? "visible" : "hidden"}  
          variants={textVariants}  
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 100 }}  
        >  
          <h2 className="text-[25px] sm:text-[30px] md:text-[40px] font-bold uppercase leading-tight tracking-wide">  
            Redefining Fashion <span className="text-gray-300">with Passion</span>  
          </h2>  
          <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-4 leading-relaxed text-gray-300">  
            At JHOMS, we blend timeless elegance with bold, avant-garde designs. Our collection features modern pieces that tell a story, inspiring you to express your individuality in every outfit. Let your style speak louder than words.  
          </p>  
          <ul className="mt-6 space-y-4 sm:space-y-6">  
            <li className="flex items-center justify-center md:justify-start">  
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full mr-3 sm:mr-4"></span>  
              <span className="text-gray-300 text-[14px] sm:text-[16px]">Exclusive designs tailored for you</span>  
            </li>  
            <li className="flex items-center justify-center md:justify-start">  
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full mr-3 sm:mr-4"></span>  
              <span className="text-gray-300 text-[14px] sm:text-[16px]">Premium materials for ultimate comfort</span>  
            </li>  
            <li className="flex items-center justify-center md:justify-start">  
              <span className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full mr-3 sm:mr-4"></span>  
              <span className="text-gray-300 text-[14px] sm:text-[16px]">Fashion-forward trends inspired by art</span>  
            </li>  
          </ul>  
          <button className="mt-6 sm:mt-8 px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 hover:bg-gray-600 text-white text-[14px] sm:text-[18px] font-semibold rounded-lg shadow-lg transition">  
            Discover Now  
          </button>  
        </motion.div>  
      </div>  

      {/* Fashion Gallery */}  
      <div className="relative z-10 mt-12 sm:mt-16 px-6 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">  
        {['/1.jpg', '/2.jpg', '/3.jpg'].map((src, index) => (  
          <motion.div  
            key={index}  
            className="relative group"  
            initial="hidden"  
            animate={inView ? "visible" : "hidden"}  
            variants={imageVariants}  
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1, type: "spring", stiffness: 100 }}  
          >  
            <img  
              className="w-full h-[300px] sm:h-[350px] rounded-lg shadow-lg border-2 border-white group-hover:scale-105 transition-transform"  
              src={src}  
              alt={`Design ${index + 1}`}  
            />  
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300">  
              <span className="text-[16px] sm:text-[20px] text-white font-semibold">  
                {index === 0 ? 'Minimalist Elegance' : index === 1 ? 'Bold Statements' : 'Avant-Garde Artistry'}  
              </span>  
            </div>  
          </motion.div>  
        ))}  
      </div>  
    </section>  
  );  
};  

export default InfoSection;
