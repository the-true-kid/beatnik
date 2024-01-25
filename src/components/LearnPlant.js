import React from 'react';
// Importing useParams and Link from 'react-router-dom' for routing functionality
// useParams: A hook for extracting parameters from the URL in a React Router context.
import { useParams, Link } from 'react-router-dom';

//hard coded data of plants, that is meant to be replaced with real data with backend implementation
const hardcodedPlantData = {
  1: {
    name: 'Rosemary',
    climate: 'Mediterranean',
    origin: 'Mediterranean region',
    folklore: 'Associated with memory enhancement and remembrance',
    medicinalBenefits: 'Used for its anti-inflammatory and antioxidant properties',
    toxins: 'Generally considered safe when used in culinary amounts',
  },
  2: {
    name: 'Lavender',
    climate: 'Mediterranean',
    origin: 'Mediterranean region',
    folklore: 'Known for its calming and soothing properties',
    medicinalBenefits: 'Used for its stress-relieving and sleep-inducing effects',
    toxins: 'Generally considered safe when used appropriately',
  },
  3: {
    name: 'Mugwort',
    climate: 'Temperate',
    origin: 'Europe, Asia, and North America',
    folklore: 'Associated with vivid dreams and protection against evil spirits',
    medicinalBenefits: 'Used in traditional medicine for various purposes',
    toxins: 'Should be used cautiously, as excessive consumption may have adverse effects',
  },
  4: {
    name: 'Mint',
    climate: 'Temperate',
    origin: 'Europe, Asia, and North America',
    folklore: 'Often associated with freshness and used in culinary and medicinal applications',
    medicinalBenefits: 'Used for digestive and respiratory conditions, and as a natural breath freshener',
    toxins: 'Generally safe when used in moderate amounts',
    },
  5: {
    name: 'Lemon Balm',
    climate: 'Mediterranean',
    origin: 'Southern Europe and Western Asia',
    folklore: 'Known for its lemon scent and calming effects on the nervous system',
    medicinalBenefits: 'Used to reduce stress, anxiety, and promote sleep',
    toxins: 'Considered safe when used appropriately',
    },
  6: {
    name: 'Spider Plant',
    climate: 'Tropical and Subtropical',
    origin: 'South Africa',
    folklore: 'Popular for its air-purifying abilities and easy care',
    medicinalBenefits: 'Not typically used for medicinal purposes',
    toxins: 'Non-toxic to humans and pets',
    },
  };

export const LearnPlant = () => {
  const { plantId } = useParams();
  const plantData = hardcodedPlantData[plantId];

  if (!plantData) {
    return <p>Plant not found</p>;
  }

  const categories = [
    { label: 'Climate', value: plantData.climate },
    { label: 'Origin', value: plantData.origin },
    { label: 'Folklore', value: plantData.folklore },
    { label: 'Medicinal Benefits', value: plantData.medicinalBenefits },
    { label: 'Toxins', value: plantData.toxins },
  ];

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f7f1e3', fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="display-4 text-center mb-4">Learn More About {plantData.name}</h2>
      <div className="bg-light p-4 rounded">
        <p className="mb-0 lead">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <span className="font-weight-bold d-block mb-2">{category.label}:</span>
              <p className="mb-0">{category.value}</p>
              {index < categories.length - 1 && <hr className="my-2" />} {/* Add line if not the last category */}
            </React.Fragment>
          ))}
        </p>
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







