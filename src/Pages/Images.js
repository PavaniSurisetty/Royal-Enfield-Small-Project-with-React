// import React, { useState } from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import { Carousel } from 'react-responsive-carousel';
// import data from '../data/Data';

//   const Images = (props) => {
//   let image = props.image

//   const [index, setIndex] = useState("")
//   function surpriseHandler() {
//    let randomIndex= Math.floor (Math.random()*data.length)
//   setIndex(randomIndex)
//   }
//   function increment() {
//       if (index <= data.length) {
//           setIndex(index+1)
//           console.log("button clicked")
//       } 
//   }
//   function decrement() {
//       if (data.length <= index) {
//           setIndex(index-1)
//       }
//   }

//   return (
//       <div>
//         <img src={image} className='w-full' />
//         <button  className="btn btn-primary"onClick={decrement} >previous</button>
//         <button onClick={increment}  className="btn btn-primary">next</button>
//         <button onClick={surpriseHandler}  className="btn btn-primary"> Surprise me</button>
//       </div>
//   )
// }


// export default Images
// class Images extends React.Component {
//   render() {
//     return (
//           <Carousel>
//       <div>
//         <img src={image} className='w-full' />
//       </div>
//     </Carousel>
//   )
//   }
// }
// // function Images({ image, uniqueid }) {
  // function Images (props){
  //    let image = props.image


  // const [uniqueid, setuniqueid] = useState(0)
  // function increment() {
  //   setuniqueid = setuniqueid+1
  // }
  // function decrement() {
  //  setuniqueid= setuniqueid-1
  // }
  // function reset() {
  //   setuniqueid(101)
  // }
import React, { useState } from 'react';
import data from '../data/Data';

const Images = (props) => {
 let image = props.image
 let uniqueid = props.uniqueid
 let id = props.id
  const [index, setIndex] = useState(0);

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * data.length);
    setIndex(randomIndex);
  }
  function increment() {
    if (index < data.length - 1) {
      setIndex(index + 1);
      console.log("button clicked")
      console.log(data);
      console.log('Current image path:', data[index]);


    } else {
      // If you want to loop back to the first image when reaching the end
      setIndex(0);
    }
  }

  function decrement() {
    if (index > 0) {
      setIndex(index - 1);
      console.log("button clicked")

    } else {
      // If you want to loop to the last image when reaching the beginning
      setIndex(data.length - 1);
    }
  }

//   function increment() {
//     if (index < data.length - 1) {
//       setIndex(index + 1);
//       console.log("button clicked");
//     }
//   }

//   function decrement() {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   }

  return (
    <div>
      {/* <img src={image} className='w-auto' alt={`Image ${index}`} /> */}
      <img src={data[index].image} className='w-auto' alt={`Image ${index}`} />
      {uniqueid} {id} {index}
      <button className="btn btn-primary" onClick={decrement}>Previous</button>
      <button onClick={increment} className="btn btn-primary">Next</button>
      <button onClick={surpriseHandler} className="btn btn-primary">Surprise me</button>
    </div>
  );
}

export default Images;
