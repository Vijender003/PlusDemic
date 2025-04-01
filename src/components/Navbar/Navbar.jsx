// import React from 'react'
// import logo from '../../assets/logo.png'

// const Navbar = () => {
//   return (
//     <header>
//         <div className="container py-3 flex items-center justify-between ml-20">
//             {/* logo section */}
//             <div>
//               <img src={logo} className='ml-20 w-40'/> 
//             </div>

          
//             {/* navlinks section */}
//             <ul className=' hidden md:flex flex items-center gap-10'>
//                 <li>
//                     <a className='p-2 rounded-2xl hover:bg-primary hover:text-white transform duration-500' href="#">Products</a>
//                 </li>
//                 <li>
//                     <a className='p-2 rounded-2xl hover:bg-primary hover:text-white transform duration-500' href="#">Custome Series</a>
//                 </li>
//                 <li>
//                     <a className='p-2 rounded-2xl hover:bg-primary hover:text-white transform duration-500' href="#">About</a>
//                 </li>
//                 <li>
//                     <a className='p-2 rounded-2xl hover:bg-primary hover:text-white transform duration-500' href="#">Blogs</a>
//                 </li>
//             </ul>
//             {/* button section */}
//             <div>
//                 <button className='border border-black px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300'>Get Started</button>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default Navbar



import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-primary/8 backdrop-blur-lg shadow-md fixed w-full z-50">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} className="w-40 cursor-pointer" alt="Logo" />
        </motion.div>

        {/* Nav Links Section */}
        <motion.ul
          className="hidden md:flex items-center gap-10"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {["Products", "Custom Series", "About", "Blogs"].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href="#"
                className="p-2 rounded-2xl text-gray-700 font-semibold hover:bg-primary hover:text-white transition duration-500"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Button Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#01c28b",
              color: "#fff",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="border border-black px-6 py-2 rounded-lg text-black hover:bg-primary hover:text-white transition duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
