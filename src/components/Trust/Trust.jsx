import React from 'react'
import Icons1 from '../../assets/icons1.png'
import Icons2 from '../../assets/icon2.png'




const Trust = () => {
  return (
    <div className='bg-brandWhite pl-40 mt-10'>
        <div className="container">
            <h1 className=' pt-10 text-3xl font-bold text-darkBlur text-center'>Why you can trust this tool</h1>
            <div className="grid grid-cols-1 md:grid-cols-2
            gap-6">
                <div className='space-y-6 text-center md:text-left py-18 '>
                    <img src={Icons1} alt=''/>
                    <p className='text-2xl'>Based on reliable sources</p>
                    <p className=''>
                        We want our tool to be safe and reliable, so its
                        logic is based on
                        the official global information provided by the
                        WHO.
                    </p>
                    <p className='text-sm text-gray-400'>
                        Enchance your preliminary diagnosis and triage
                        with prediatric
                        content <span className='text-primary'>Learn More</span>
                    </p>

                </div>
                <div className='space-y-6 text-center md:text-left py-14'>
                    <img src={Icons2} alt=''/>
                    <p className='text-2xl'>Based on reliable sources</p>
                    <p className=''>
                        We want our tool to be safe and reliable, so its
                        logic is based on
                        the official global information provided by the
                        WHO.
                    </p>
                    <p className='text-sm text-gray-400'>
                        Enchance your preliminary diagnosis and triage
                        with prediatric
                        content <span className='text-primary'>Learn More</span>
                    </p>

                </div>

            </div>
        </div>

    </div>
  )
}

export default Trust