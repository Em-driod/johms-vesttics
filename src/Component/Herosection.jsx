import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // Trigger animation after 1 second

    return () => clearTimeout(timer);
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
    <section className="relative h-[600px] overflow-hidden">
      {/* Top Background */}
      <div className="absolute inset-0 bg-[url('/20.jpg')] bg-cover bg-center h-[50%] z-0"></div>

      {/* Bottom Background */}
      <div className="absolute inset-0 top-[50%] bg-[url('/23.jpg')] bg-cover bg-center h-[50%] z-0"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        {/* Three Images Side by Side */}
        <div className="flex space-x-4">
          {["/2.jpg", "/3.jpg", "/4.jpg"].map((src, index) => (
            <motion.div
              key={index}
              className="w-[300px] h-[400px] rounded shadow-lg"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              title={`Image ${index + 1}`}
              initial="hidden"
              animate={animate ? "visible" : "hidden"}
              variants={imageVariants}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
            />
          ))}
        </div>
      </div>

      {/* Text Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center text-white"
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
        variants={popUpVariants} // Use pop-up variants
        transition={{ duration: 1, type: "spring", stiffness: 100 }} // No delay
      >
        <motion.h1
          className="text-[50px] font-bold uppercase bg-black/50 px-4 py-2 rounded"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 1 }} // No delay
        >
          Jhoms Vestis
        </motion.h1>
        <motion.p
          className="text-[20px] italic mt-4 px-4 max-w-[600px] bg-black/50 py-2 rounded"
          initial="hidden"
          animate={animate ? "visible" : "hidden"}
          variants={textVariants}
          transition={{ duration: 1 }} // No delay
        >
          A brand that sells not just outfits but a trend!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
