import React from 'react'
import Logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{opacity:1}}>
        <div className='container py-12 ml-30'>
            <div>
            <img src={Logo} alt='' className='w-40'/>
            <p className='text-gray-400 ml-2 '>
              Lorem, ipsum dolor sit amet consectetur adipisicing 
              elit. Eaque neque consequuntur aspernatur
               repellendus odio, aliquam eum.

            </p>
            </div>
            {/* social icons */}
            <div className='flex space-x-6 text-3xl mt-10'>
            <FaFacebook className="hover:text-primary duration-200" />
            <FaInstagram className="hover:text-primary duration-200" />
            <FaLinkedin className="hover:text-primary duration-200" />
            </div>
        </div>
    </motion.div>
  )
}

export default Footer