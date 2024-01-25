import React from 'react';
import { useNavigate } from 'react-router-dom';

const plantList = [
  { id: 1, name: 'Rosemary', daysTillWater: 4 },
  { id: 2, name: 'Lavender', daysTillWater: 7},
  { id: 3, name: 'Mugwort', daysTillWater: 9 },
  { id: 4, name: 'Mint', daysTillWater: 5 },
  { id: 5, name: 'Lemon Balm', daysTillWater: 6 },
  { id: 6, name: 'Spider Plant', daysTillWater: 7 },
  // Add more plants as needed
];

export const HomePage = () => {
  const navigate = useNavigate();

  const handlePlantClick = (plantId) => {
    navigate(`/plant-profile/${plantId}`);
  };

  const handleGoToLibrary = () => {
    navigate('/library');
  };

  const boldNameStyle = {
    fontWeight: 'bold',
  };

  return (
    <div className="container mt-4 mb-4" style={{ backgroundColor: '#f7f1e3', fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="display-4 text-center mb-4" style={{ borderBottom: '4px solid #C8E6C9', paddingBottom: '10px' }}>Beatnik</h2>
      <button
        className="btn btn-outline-info w-100 mt-2 mb-4"
        style={{
          borderColor: '#D2B48C',
        }}
        onClick={handleGoToLibrary}
      >
        Go to Library
      </button>
      <div className="row">
        {plantList.map((plant) => (
          <div key={plant.id} className="col-lg-4 col-md-6 mb-2">
            <button
              type="button"
              className="btn w-100"
              style={{
                fontSize: '18px',
                backgroundColor: '#C8E6C9',
                color: '#000000',
                height: '200px',
                transition: 'background-color 0.3s',
              }}
              onClick={() => handlePlantClick(plant.id)}
            >
              <p style={boldNameStyle}>{plant.name}</p> <p>Days until next watering:</p> <span style={boldNameStyle}>{plant.daysTillWater}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



















