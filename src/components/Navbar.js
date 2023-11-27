import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'
function Navbar  () {
  return (
    <div className='bg-gray-300 h-20 py-5 gap-5 '>
        <nav className='flex justify-between  item-align-center'>
            <div className=''>
            <h1 className='text-red-500  text-2xl text-extrabold font-extrabold	'>Royal <span className='text-black text-2xl text-bold '>Enfield</span></h1>
            </div>
            <div  className=' font-bold text-xl no-underline'>
            {/* {[
                    ['About','/About',1],
                    ['Products','/Products',2],
                    ['Images','/Accounts',3],
                    ['Models','/Models',4],
                    ['Centers','/Centers',5],
                    ['Contact us','/Contactus',6]
                ].map(([Item,url,key])=>(
                    <a  className='flex'href={url} key={key} >{Item}</a>
                )
                )}  */}
                <ul className='flex flex-row justify-normal gap-5 '>
                <li ><Link className='no-underline' to='/'>Home</Link></li>
                <li><Link  className='no-underline' to='/about'>About</Link></li>
                <li><Link  className='no-underline' to='/Products'>Products</Link></li>
                <li><Link  className='no-underline'to='/images'>Images</Link></li>
                <li><Link  className='no-underline'to='/Models'>Models</Link></li>
                <li><Link  className='no-underline'to='/Centers'>Centers</Link></li>
                <li><Link  className='no-underline' to='/Contactus'>Contactus</Link></li>
                <li><Link  className='no-underline' to='/fullDetails'>Fill The Full Form</Link></li>
                <li><Link  className='no-underline' to='/navbar'>Navbar</Link></li>

                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar