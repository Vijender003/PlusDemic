// import React from 'react'
// import HeroImage from '../../assets/hero.png'


// const Hero = () => {
//   return (
//     <section>
//     <div className='container bg-brandWhite rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[650px] ml-30 p-6'>
//         {/* brand info */}
//         <div className='flex flex-col justify-center gap-3'>
//            <div className='mt-24 mb-10 md:mt-0 md:mb-0 space-y-4 text-center md:text-left'>
//            <h1 className='text-5xl font-bold text-darkBlur'>COVID-19 Risk <br/>Assessment Tool</h1>
//             <p className='text-lg text-gray-400 mt-4'>
//                A set of solutions designed to help quickly 
//                identify coronavirus 
//                symptoms and get reliable information
//                regarding COVID-19 concerns.
//             </p>
//             <div className='bg-primary text-white mt-7 px-6 py-4 md:mx-0 rounded-lg mt-4 
//             w-fit font-bold hover:shadow-lg duration-200'>
//                 {/* button section */}
//                 <button>
//                     See how to use it
//                 </button>
//             </div>
            
//            </div> 
           
//         </div>
//         {/* image section */}
//         <div className='flex items-center justify-center'>
//             <img src={HeroImage} alt=""/>
//         </div>

//     </div>
//     </section>
//   )
// }

// export default Hero



import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-12">
      <div className="container mx-auto bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[650px] p-8 shadow-lg">
        {/* Brand Info Section */}
        <motion.div
          className="flex flex-col justify-center gap-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mt-16 md:mt-0 space-y-6 text-center md:text-left">
            <motion.h1
              className="text-5xl font-bold text-darkBlur leading-snug"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              COVID-19 Risk <br /> Assessment Tool
            </motion.h1>
            <motion.p
              className="text-lg text-gray-500 mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding COVID-19 concerns.
            </motion.p>

            {/* Button Section */}
            <motion.div
              whileHover={{ scale: 1.1, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary text-white mt-7 px-6 py-4 mx-auto md:mx-0 rounded-lg cursor-pointer w-fit font-bold transition duration-300"
            >
              <button>See how to use it</button>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.img
            src={HeroImage}
            alt="Hero"
            className="w-full max-w-[500px] drop-shadow-lg"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
