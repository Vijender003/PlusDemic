import React from 'react'
import img1 from '../../assets/Uses/a.png'
import img2 from '../../assets/Uses/b.png'
import img3 from '../../assets/Uses/c.png'

const Uses = () => {
  return (
    <>
    <div className="container ml-30">
        <div className="grid grid-cols-1 md:grid-cols-2
        xl:grid-cols-4 gap-6">
            <div>
                <h1 className='text-3xl font-bold text-darkBlur'>
                    How to use it
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
                    <button className='mt-42 border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white
                    transform duration-300'>Get in Touch</button>
            </div>
            <div>
                <img src={img1} alt='' className='w-full rounded-3xl'/>
                <p className='text-gray-400 mt-4 pl-5'>Coronavirus</p>
            </div>
            <div>
                <img src={img2} alt='' className='w-full rounded-3xl'/>
                <p className='text-gray-400 mt-4 pl-5'>Diagostic</p>
            </div>
            <div>
                <img src={img3} alt='' className='w-full rounded-3xl'/>
                <p className='text-gray-400 mt-4 pl-5'>Symptoms</p>
            </div>


        </div>
    </div>
    </>
  )
}

export default Uses