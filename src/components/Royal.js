import React from 'react'
// import Red from '../redbullet.jpg'
import gif from '../images/meteor350-royal-enfield gif.gif'
import appstore from '../appstore.png'
import plystore from '../plystore.png'
function Royal() {
    return (
        <div className='flex justify-between px-5 py-7 gap-5 bg-white'>
            <div className='text-black'>
                <h1 className='text-3xl py-7 font-bold '>
                    We Provide Royal Enfield Bikes to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                    Entire Country
                    Royal Enfield its a Pride of <i className='text-red-700'>INDIA</i>
                </h1>
                <p className='px-5 py-5 gap-5'>
                    Royal Enfield resumed production of the single cylinder ohv 350cc model G and 500cc Model J, with rigid rear frame and telescopic front forks. These were ride-to-work basic models, in a world hungry for transport. 
                </p>
                <p className='px-5 py-5 gap-5'> A large number of factory reconditioned ex-military sv Model C and ohv Model CO singles were also offered for sale, as they were sold off as surplus by various military services</p>
                {/* <p className='px-5 py-5 gap-5'> The claimed mileage of Classic 350 is 41.55 kmpl.</p> */}
                <div className='flex flex-row justify-center  border-spacing-1'>
                    <button className='border-black border-3 rounded-md'><img src={plystore} alt='image'
                    className='rounded-md  w-36 h-8 ' /></button>
                  <button className='  border-black border-3 mx-5 rounded-md'>  <img src={appstore} alt='image'
                     className='rounded-md  w-36 ' /></button>
                </div>
            </div>
            <div className='' >
                <img src={gif} alt='image'
                   className='rounded-md w-[1080px] h-screen ' />
            </div>
        </div>
    )
}

export default Royal
