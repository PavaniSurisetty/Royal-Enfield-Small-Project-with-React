import React from 'react'
import '../style.css'

function Models(props) {
    let id = props.id
    let image = props.image
    let price = props.price
    let color = props.color
    return (

        <div className='models'>
            <div className='items-center gap-10 py-5 border-2 border-black px-5 rounded-sm m-5 ml-5 '>
                <div className=''>
                    <div><h1 className=''>{color}</h1></div>
                    <div><img src={image} className='h-36 rounded-md' /></div>
                    <div><p>{price}</p></div>
                </div>
                <button className='btn btn-primary'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Models