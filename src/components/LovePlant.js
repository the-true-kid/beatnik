import React from 'react';
import { useParams, Link } from 'react-router-dom';

const hardcodedPlantData = {
  1: { name: 'Rosemary', Sun: 'Full sun', Water: 'Moderate' },
  2: { name: 'Lavender', Sun: 'Full sun', Water: 'Low' },
  3: { name: 'Mugwort', Sun: 'Partial shade', Water: 'High' },
  4: { name: 'Mint', Sun: 'Full sun', Water: 'High' },
  5: { name: 'Lemon Balm', Sun: 'Partial shade', Water: 'Moderate' },
  6: { name: 'Spider Plant', Sun: 'Partial shade', Water: 'Low' },
  
  // Add more plants as needed
};

export const LovePlant = () => {
  const { plantId } = useParams();
  const plantData = hardcodedPlantData[plantId];

  if (!plantData) {
    return <p>Plant not found</p>;
  }

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f7f1e3', fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="display-4 text-center mb-4">Love for {plantData.name}</h2>
      <div className="lead bg-light">
        {Object.entries(plantData).map(([category, value]) => (
          <div key={category}>
            <p className="mb-0">
              <span className="font-weight-bold">{category === 'name' ? '' : category + ':'}</span> {value}
            </p>
            <hr className="my-2" />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-3">
        <Link to={`/plant-profile/${plantId}`} className="btn btn-outline-info">
          Back to Plant Profile
        </Link>
        <Link to="/" className="btn btn-outline-info">
          Go Home
        </Link>
      </div>
    </div>
  );
};







