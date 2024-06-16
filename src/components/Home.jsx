import React from 'react';

const Home = () => {
  const pokeBallImageUrl = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f8/latest/20200428203046/Gengar.png/800px-Gengar.png"; // foto del gengar 

  return (
    <div className="container text-center mt-5">
       <h1>ホームページへようこそ</h1>
      <p>Welcome to the home page!</p>
      <img
        src={pokeBallImageUrl}
        alt="Pokébola"
        className="img-fluid pokeball-image"
        style={{ width: '350px', height: '350px' }} 
        
      />

    </div>
  );
};

export default Home;