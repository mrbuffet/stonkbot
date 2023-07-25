import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the search term to the server here
    if (searchTerm.trim() !== '') {
      fetch(`/api/search?query=${encodeURIComponent(searchTerm)}`)
        .then((response) => response.json())
        .then((data) => {
          // Handle the server response here
          console.log(data);
        })
        .catch((error) => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search Label:
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Enter your search query"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
