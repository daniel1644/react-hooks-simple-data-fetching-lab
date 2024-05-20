// create your App component here
import React, { useEffect, useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    }

    fetchDogImage();
  }, []);

  return (
    <div>
      {!dogImage ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
