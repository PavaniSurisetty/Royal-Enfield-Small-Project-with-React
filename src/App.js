import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Royal from './components/Royal';
import Form from './components/Form';
import About from './Pages/About';
import Products from './Pages/Products'
import Images from './Pages/Images'
import Models from './Pages/Models'
import Contactus from './Pages/Contactus'
import Centers from './Pages/Centers'
import { Route, Routes } from 'react-router-dom';
import data from './data/Data';
import Home from './components/Home';
import FullDetails from './components/FullDetails';
function App() {
  //  let pdata = [
  //   { id: 1, name: 'Sri', age: 25 },
  //   { id: 2, name: 'Jai', age: 30 },
  //   { id: 3, name: 'Ram', age: 32 },
  //   { id: 4, name: 'Sri', age: 35 },
  //   { id: 5, name: 'Sree', age: 31 },
  //   { id: 6, name: 'Sita', age: 36 },
  //   { id: 7, name: 'Ramu', age: 38 },
  //   { id: 8, name: 'Lak', age: 35 },
  //   { id: 9, name: 'Anji', age: 39},
  //   { id: 10, name: 'hannu', age: 35 },
  //   { id: 11, name: 'lucky', age: 34 },

  //   // Add more data as needed
  // ]
  return (
    <div className="App">
      <Routes>
        <Route path='Models' element={data.map((data) => {
          return <Models key={data.id} image={data.image} uniqueid={data.uniqueid} color={data.color} price={data.price}></Models>
        })} />
        <Route path='/fullDetails' element={<FullDetails/>} />
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' exact component ={About} /> */}
        <Route path='about' element={<About />} />

        <Route path='Products' element={<Products data={data} />} />
        {/* <Route path='images' element={data.map((data) => (
         <Images data={data} key={data.id} image={data.image} uniqueid={data.uniqueid} ></Images>
  ))} /> */}
        <Route path='images' element={<Images data={data} key={data.id} image={data.image} uniqueid={data.uniqueid} />} />

        <Route path='Centers' element={<Centers />} />
        <Route path='Contactus' element={<Contactus />} />
        <Route path='navbar' element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
