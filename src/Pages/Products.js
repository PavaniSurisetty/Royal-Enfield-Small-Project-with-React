import React, { useState } from 'react';
const Products = ({ data }) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
        &nbsp;        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;

        <button className='btn btn-primary btn-sm' onClick={handleSearch}>Search</button>
      </div>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Image</th>
            <th>uniqueid</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.price}</td>
              <td><img src={item.image} alt='${image}'></img></td>
              <td>{item.uniqueid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
