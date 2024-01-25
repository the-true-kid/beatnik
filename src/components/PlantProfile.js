import React from 'react';
import { Link, useParams } from 'react-router-dom';

import rosemaryImage from '../images/rosemary.jpg';
import lavenderImage from '../images/lavender.jpg';
import mugwortImage from '../images/mugwort.jpg';
import mintImage from '../images/mint.jpg';
import lemonbalmImage from '../images/lemonbalm.jpg';
import spiderplantImage from '../images/spiderplant.jpg';


const hardcodedPlantData = {
  1: {
    name: 'Rosemary',
    description:
      'Rosemary (Rosmarinus officinalis) is an evergreen herb characterized by needle-like leaves and a distinctive aromatic fragrance, frequently employed in culinary dishes, and known for its potential health benefits.',
    image: rosemaryImage,
    daysTillWater: 4,
  },
  2: {
    name: 'Lavender',
    description:
      'Lavender (Lavandula) is a fragrant perennial plant widely cultivated for its aromatic flowers, commonly used in aromatherapy, cosmetics, and culinary purposes.',
    image: lavenderImage,
    daysTillWater: 7,
  },
  3: {
    name: 'Mugwort',
    description:
      'Mugwort (Artemisia vulgaris) is a perennial herb known for its aromatic leaves and historical use in traditional medicine, culinary applications, and folklore.',
    image: mugwortImage,
    daysTillWater: 9,
  },
  4: {
    name: 'Mint',
    description:
      'Mint is a fragrant herb with a refreshing taste, often used in culinary dishes, beverages, and for its potential medicinal properties.',
    image: mintImage, 
    daysTillWater: 5,
  },
  5: {
    name: 'Lemon Balm',
    description:
      'Lemon Balm (Melissa officinalis) is a lemon-scented herb known for its calming effects, used in teas, culinary dishes, and herbal remedies.',
    image: lemonbalmImage, 
    daysTillWater: 6,
  },
  6: {
    name: 'Spider Plant',
    description:
      'Spider Plant (Chlorophytum comosum) is an easy-to-care-for houseplant with arching leaves, popular for its air-purifying qualities and adaptability.',
    image: spiderplantImage, 
    daysTillWater: 7,
  },

};

export const PlantProfile = () => {
  const { plantId } = useParams();
  const plantData = hardcodedPlantData[plantId];

  if (!plantData) {
    return <p>Plant not found</p>;
  }

  return (
    <div className="container mt-4 text-center" style={{ backgroundColor: '#f7f1e3' }}>
      <h2 className="display-4 mb-3">{plantData.name}'s Pot</h2>

      <div className="row">
        <div className="col-md-6">
          <img
            src={plantData.image}
            alt={plantData.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <div className="bg-light p-4 rounded">
            <p className="lead mb-0 text-lg" style={{ fontSize: '1.5rem' }}>
              {plantData.description}
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#C8E6C9' }}>
        <p className="mt-3" style={{ fontSize: '1.25rem' }}>
          Days until watering: {plantData.daysTillWater}
        </p>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Link to={`/learn-plant/${plantId}`} className="btn btn-outline-info btn-lg mr-1">
          Learn
        </Link>
        <Link to={`/love-plant/${plantId}`} className="btn btn-outline-info btn-lg mr-1">
          Love
        </Link>
        <Link to={`/listen-plant/${plantId}`} className="btn btn-outline-info btn-lg mr-1">
          Listen
        </Link>
        <Link to="/" className="btn btn-outline-info btn-lg">
          Go to Home
        </Link>
      </div>
    </div>
  );
};













