import React from 'react';
import { useParams, Link } from 'react-router-dom';

import rosemaryMp3 from '../audio/rosemary.mp3';
import lavenderMp3 from '../audio/lavender.mp3';
import mugwortMp3 from '../audio/mugwort.mp3';
import mintMp3 from '../audio/mint.mp3';
import lemonbalmMp3 from '../audio/lemonbalm.mp3';
import spiderplantMp3 from '../audio/spiderplant.mp3';

const localPlantData = {
  1: {
    name: 'Rosemary',
    mp3FileUrl: rosemaryMp3,
  },
  2: {
    name: 'Lavender',
    mp3FileUrl: lavenderMp3,
  },
  3: {
    name: 'Mugwort',
    mp3FileUrl: mugwortMp3,
  },
  4: {
    name: 'Mint',
    mp3FileUrl: mintMp3,
  },
  5: {
    name: 'Lemon Balm',
    mp3FileUrl: lemonbalmMp3,
  },
  6: {
    name: 'Spider Plant',
    mp3FileUrl: spiderplantMp3,
  },
};

export const ListenPlant = () => {
  const { plantId } = useParams();
  const plantData = localPlantData[plantId];

  if (!plantData) {
    return <p>Plant not found</p>;
  }

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f7f1e3', fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="display-4 text-center mb-4">{`${plantData.name} Sings Like This`}</h2>

      {/* Audio player for the MP3 file */}
      <div className="text-center">
        <audio controls>
          <source src={plantData.mp3FileUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Add other details as needed */}
      <div className='text-center'>
      {/* Buttons to navigate back to PlantProfile using dynamic routing, or to HomePage */}
      <Link to={`/plant-profile/${plantId}`} className="btn btn-outline-info mt-3 mr-2">
        Back to Plant Profile
      </Link>
      <Link to="/" className="btn btn-outline-info mt-3">
        Go Home
      </Link>
      </div>
    </div>
  );
};




