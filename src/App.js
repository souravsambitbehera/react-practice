// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [dresses, setDresses] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchDresses();
  }, []);

  const fetchDresses = () => {
    axios.get('http://localhost:3000/dresses')
      .then(response => {
        setDresses(response.data);
      })
      .catch(error => {
        console.error('Error fetching dresses:', error);
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('price', price);

    axios.post('http://localhost:3000/dress', formData)
      .then(response => {
        console.log('Dress created successfully');
        fetchDresses();
        setName('');
        setPrice('');
        setImage(null);
      })
      .catch(error => {
        console.error('Error creating dress:', error);
      });
  };

  return (
    <div>
      <h1>Dress Catalog</h1>
      <form onSubmit={handleFormSubmit} action="http://localhost:8080/dresses" encType="multipart/form-data">

        <label>
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Add Dress</button>
      </form>
      <h2>Dress List</h2>
      <ul>
        {dresses.map(dress => (
          <li key={dress._id}>
            <img src={`http://localhost:3000/${dress.image}`} alt={dress.name} />
            <div>
              <h3>{dress.name}</h3>
              <p>Price: ${dress.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
