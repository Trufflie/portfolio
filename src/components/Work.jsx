import React from 'react'
import Keeper from '../assets/projects/keeper.png'
import Checklist from '../assets/projects/checklist.png'
import QRCode from '../assets/projects/qr-code.png'



const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600'>Work</p>
                <p className='py-6'>Check out some of my work</p>
            </div>
            <div 
            
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Keeper})`}} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text 2xl font-bold text-white tracking-wider'>
                            Note Keeping Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a rel="noopener"  href='https://trufflie.github.io/blogapp/' >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a rel="noopener"  href='https://github.com/Trufflie/blogapp' >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Checklist})`}} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text 2xl font-bold text-white tracking-wider'>
                            Simple Checklist Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a rel="noopener"  href='https://trufflie.github.io/checklist/' >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a rel="noopener"   href='https://github.com/Trufflie/checklist' >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${QRCode})`}} className='shadow-lg shadow-[040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text 2xl font-bold text-white tracking-wider'>
                            QR Code Generator Application

                        </span>
                        <div className='pt-8 text-center'>
                            <a rel="noopener"  href='https://trufflie.github.io/qr-code/' >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a rel="noopener"  href='https://github.com/Trufflie/qr-code' >
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Work