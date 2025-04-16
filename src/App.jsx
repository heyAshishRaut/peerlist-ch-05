import { useState } from 'react'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import { div } from 'framer-motion/client'
import { AnimatePresence, motion } from 'framer-motion';


function App() {
    const [btn, setBtn] = useState(1)

    return (
        <div className='font-poppins w-screen h-screen flex justify-center items-start pt-[200px]'>
            <div className=' flex flex-col gap-y-[25px]'>

                <div className='text-2xl font-semibold'>Collectibles</div>

                <div className='flex gap-x-[15px] pb-[20px] border-b-2 border-gray-300'>
                    <button onClick={() => setBtn(1)} className={`flex items-center gap-x-[10px] bg-gray-200 px-[15px] py-[7px] rounded-[50px] ${btn === 1 ? "bg-blue-500": ""} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={`${btn === 1 ? 'white' : 'gray'}`} class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                        </svg>
                        <div className={`${btn === 1 ? "text-white" : "text-gray-500"}`}>List view</div>
                    </button>

                    <button onClick={() => setBtn(2)} className={`flex items-center gap-x-[10px] bg-gray-200 px-[15px] py-[7px] rounded-[50px] ${btn === 2 ? "bg-blue-500": ""} `}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={`${btn === 2 ? 'white' : 'gray'}`} class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                        </svg>

                        <div className={`${btn === 2 ? "text-white" : "text-gray-500"}`}>Card view</div>
                    </button>

                    <button onClick={() => setBtn(3)} className={`flex items-center gap-x-[10px] bg-gray-200 px-[15px] py-[7px] rounded-[50px] ${btn === 3 ? "bg-blue-500" : ""}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke={`${btn === 3 ? 'white' : 'gray'}`} class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>

                        <div className={`${btn === 3 ? "text-white" : "text-gray-500"}`}>Pack view</div>
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={btn}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {btn === 1 ? <ListView /> : btn === 2 ? <CardView /> : <PackView />}
                    </motion.div>
                </AnimatePresence>

            </div>
        </div>
    );
}

function ListView(){
    return(
        <div className='w-full font-poppins flex flex-col gap-y-[15px]'>

            <div className='flex justify-between items-center'>
                <div className='h-[80px] flex items-center gap-x-[10px]'>

                    <img src={image1} className='object-cover h-[100%] w-[80px] rounded-xl' alt="" />

                    <div className='flex flex-col gap-y-[7px]'>
                        <div className='text-lg font-semibold'>Skilled Fingers Series</div>
                        <div><span className='font-semibold text-lg'>0.855</span> <span className='text-gray-500 text-lg'>ETH</span></div>
                    </div>
                </div>

                <div className='flex gap-x-[5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="size-6">
                        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                    </svg>
                    <div className='text-lg text-gray-500'>#209</div>
                </div>
            </div>


            <div className='flex justify-between items-center'>
                <div className='h-[80px] flex items-center gap-x-[10px]'>

                    <img src={image2} className='object-cover h-[100%] w-[80px] rounded-xl' alt="" />

                    <div className='flex flex-col gap-y-[7px]'>
                        <div className='text-lg font-semibold'>Vibrant Vibes Series</div>
                        <div><span className='font-semibold text-lg'>0.209</span> <span className='text-gray-500 text-lg'>ETH</span></div>
                    </div>
                </div>

                <div className='flex gap-x-[5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="size-6">
                        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                    </svg>
                    <div className='text-lg text-gray-500'>#808</div>
                </div>
            </div>

        </div>
    );
}

function CardView() {
    return (
        <div className='w-full h-[250px] font-poppins flex justify-between gap-x-[25px]'>
            <div className='w-[50%]'>
                <img src={image1} className='h-[190px] object-cover rounded-xl w-[100%] flex flex-col' alt="" />
                <div className='pt-[10px] text-lg pb-[5px]'>Skilled Fingers Series</div>
                <div className='flex justify-between items-center'>
                    <div><span className='pr-[5px]'>0.855</span><span className='text-gray-500'>ETH</span></div>

                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="size-6">
                            <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                        </svg>
                        <div className='pl-[5px] text-gray-500'>#209</div>
                    </div>
                </div>
            </div>

            <div className='w-[50%]'>
                <img src={image2} className='h-[190px] object-cover rounded-xl w-[100%] flex flex-col' alt="" />
                <div className='pt-[10px] text-lg pb-[5px]'>Vibrant Vibes Series</div>
                <div className='flex justify-between items-center'>
                    <div><span className='pr-[5px]'>0.209</span><span className='text-gray-500'>ETH</span></div>

                    <div className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gold" class="size-6">
                            <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
                        </svg>
                        <div className='pl-[5px] text-gray-500'>#808</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PackView() {
    return (
        <div className = 'w-full font-poppins flex flex-col items-center gap-y-[25px]'>
            <div className="relative w-40 h-40 mt-[25px] mb-[25px]">
                <img src={image2} className="absolute rounded-3xl rotate-[30deg] top-0 left-0 w-full h-full object-cover"/>

                <img src={image1} className="absolute rounded-3xl rotate-[15deg] top-0 left-0 w-full h-full object-cover"/>
            </div>
            <div className='flex flex-col items-center'>
                <div className='font-semibold text-xl'>2 Collectibles</div>
                <div className='text-xl mt-[5px]'><span className='pr-[5px]'>1.064</span><span className='text-gray-500'>ETH</span></div>
            </div>
        </div>
    );
}

export default App
