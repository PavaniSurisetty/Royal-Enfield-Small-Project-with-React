import React from 'react'

function Form() {
    return (
        <div className='flex justify-between space-x-5 mt-5 h-8'>
            <input placeholder='FirstName' className='w-36 border-2 border-black gap-5 rounded-md' />
            <input placeholder='LastName' className='w-36 border-2 border-black gap-5 rounded-md' />
            <input placeholder='Email' className='w-36 border-2 border-black gap-5 rounded-md' />
            <input type='checkbox' id='checkbox' />
            <label htmlFor='checkbox' className='text-blue-400'>i have read and accepted the privacy policy </label>
            <br />
            {/* <select placeholder='Country Of Residence'>
                <option>India</option>
                <option>USA</option>
            </select> */}
            {/* <input className='border-2 w-10 gap-5 rounded-md border-black' /> */}
            <input placeholder='PhoneNumber' className='w-36 border-2 gap-5 rounded-md border-black' />
            &nbsp;
            <select>
                {/* <option>USD</option>
                <option>INR</option> */}
                
                    {[
                        ['India','+91',1],
                        ['USA','+1',2],
                        ['UK','+44',3],
                        ['Mexico','+52',4],
                        ['China','+86',5],
                    ].map(([Country,Code,key])=>(
                     <option id={Code}key={key}>{Country} &nbsp; {Code}</option>
                    )
                    )} 
            </select>
            
            {/* <input placeholder={Code} /> */}
             {/* {[
                        ['+91',1],
                        ['+1',2],
                        ['+44',3],
                        ['+52',4],
                        ['+86',5],
                    ].map(([Code,key])=>(
                        <input placeholder={Code}key={key}/>
                    )
                    )} */}
                
            <button className='btn btn-warning'>REGISTER NOW</button>
            <hr />
            <button className='btn btn-primary'>Sign up Now</button>
        </div>
    )
}

export default Form;