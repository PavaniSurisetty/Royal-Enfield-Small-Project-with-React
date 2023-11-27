import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setData(response.data);
      setFilteredData(response.data); // Initialize filteredData with all data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // const handleSearch = () => {
  //   console.log('Search triggered');
  //   console.log('Search Text:', searchText);
    
  //   const filteredData = data.filter((item) =>
  //     Object.values(item).some((value) =>
  //       value.toString().toLowerCase().includes(searchText.toLowerCase())
  //     )
  //   );
    
  //   console.log('Filtered Data:', filteredData);
  //   setFilteredData(filteredData);
  // };
  
  

  // Other code for handling the search bar will go here
  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      /> */}

      {/* <button className='btn btn-primary btn-sm' onClick={handleSearch}>Search</button> */}
      {/* <button onClick={resetSearch}>Reset</button> */}

      <h1>Data Table</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>


            {/* Add more table headers based on your data structure */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.body}</td>

              {/* Add more table cells based on your data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default About;

