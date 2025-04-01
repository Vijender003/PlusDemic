import React from 'react'
import Card from '../../components/HowitHelps/Card'
import Icon1 from '../../assets/Icons/1.png'
import Icon2 from '../../assets/Icons/2.png'
import Icon3 from '../../assets/Icons/3.png'
const HowitHelps = () => {
  return (
    <>
        <div className="container mt-10 ml-30 mb-20">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className='col-span-2'>
                <div className="grid grid-cols-1
                md:grid-cols-3 xl:grid-cols-3 gap-5">
                 <Card icon={Icon1} heading="Symptoms" text='
                  fever, cough, fatigue, shortness
                  of breath, loss of taste/smell
                  headache, sore throat, body pain '/>
                 <Card icon={Icon2} heading="Recommendations" text='
                  Testing guidence based on symptom
                  severity and medications suggestions
                  for symptoms management'/>
                 <Card icon={Icon3} heading="Local information" text='
                  Local hospitals and clinic resources
                  Along with community support services
                  and Local vaccination sites'/>


                </div>

            </div>
            <div>
                <h1 className='text-3xl font-bold text-darkBlur'>
                    How it helps people
                </h1>
                <p className='text-lg text-gray-400 mt-4'>
                    Offers personlized Recommendations 
                    based on risk factors and provide
                   best and reliable, up-to-date information
                </p>
                <p className='text-sm text-gray-400 mt-4'>Ensure those with severe symptoms   
                    seek care promptly......   
                    <a href='#' className='text-primary'> Learn More   </a>
                    </p>
                    <button className='mt-19 border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white
                    transform duration-300'>Get in Touch</button>
            </div>

           </div>  
        </div>
    </>
  )
}

export default HowitHelps






// import React from "react";
// import { motion } from "framer-motion";
// import Card from "../../components/HowitHelps/Card";
// import Icon1 from "../../assets/Icons/1.png";
// import Icon2 from "../../assets/Icons/2.png";
// import Icon3 from "../../assets/Icons/3.png";

// const HowitHelps = () => {
//   return (
//     <section className="bg-gray-50 py-12">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
//           {/* Left Section: Cards */}
//           <motion.div
//             className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8"
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { staggerChildren: 0.2, duration: 0.5 },
//               },
//             }}
//           >
//             {/* Card 1 */}
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//               <Card
//                 icon={Icon1}
//                 heading="Symptoms"
//                 text="Fever, cough, fatigue, shortness of breath, loss of taste/smell, headache, sore throat, body pain"
//               />
//             </motion.div>

//             {/* Card 2 */}
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//               <Card
//                 icon={Icon2}
//                 heading="Recommendations"
//                 text="Testing guidance based on symptom severity and medication suggestions for symptom management"
//               />
//             </motion.div>

//             {/* Card 3 */}
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
//               <Card
//                 icon={Icon3}
//                 heading="Local Information"
//                 text="Local hospitals and clinic resources, along with community support services and vaccination sites"
//               />
//             </motion.div>
//           </motion.div>

//           {/* Right Section: Info & Button */}
//           <motion.div
//             className="space-y-6"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <h1 className="text-4xl font-bold text-darkBlur leading-snug">
//               How it helps people
//             </h1>
//             <p className="text-lg text-gray-500 leading-relaxed">
//               Offers personalized recommendations based on risk factors and
//               provides reliable, up-to-date information.
//             </p>
//             <p className="text-sm text-gray-500">
//               Ensure those with severe symptoms seek care promptly...
//               <a href="#" className="text-primary font-semibold hover:underline ml-1">
//                 Learn More
//               </a>
//             </p>

//             {/* Button with Animation */}
//             <motion.button
//               whileHover={{
//                 scale: 1.1,
//                 backgroundColor: "#01c28b",
//                 color: "#fff",
//                 transition: { duration: 0.3 },
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-6 border border-gray-300 px-6 py-3 rounded-lg text-gray-700 font-semibold hover:bg-primary hover:text-white transition duration-300"
//             >
//               Get in Touch
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowitHelps;
