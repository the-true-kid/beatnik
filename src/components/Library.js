import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const libraryLinks = [
  { id: 1, name: 'Learn About Rosemary', category: 'website', url: 'https://en.wikipedia.org/wiki/Lavandula' },
  { id: 2, name: 'Learn About Lavender', category: 'website', url: 'https://en.wikipedia.org/wiki/Rosemary' },
  { id: 3, name: 'Learn About Mugwort', category: 'website', url: 'https://en.wikipedia.org/wiki/Mugwort' },
  { id: 4, name: 'Learn About Mint', category: 'website', url: 'https://en.wikipedia.org/wiki/Mentha' },
  { id: 5, name: 'Learn About Lemon Balm', category: 'website', url: 'https://en.wikipedia.org/wiki/Lemon_balm' },
  { id: 6, name: 'Learn About Spider Plant', category: 'website', url: 'hhttps://en.wikipedia.org/wiki/Chlorophytum_comosum' },
  { id: 7, name: 'Hidden Life of Trees by Peter Wohlleben', category: 'book', url: 'https://www.amazon.com/Hidden-Life-Trees-Communicate_Discoveries-Secret/dp/1771642483' },
  { id: 8, name: 'Entangled Life by Merlin Sheldrake', category: 'book', url: 'https://www.amazon.com/Entangled-Life-Worlds-Change-Futures/dp/0525510311' },
  // Add more links as needed
];

export const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredLinks = libraryLinks.filter((link) => {
    // Filter by search term and category
    const searchTermMatch = link.name.toLowerCase().includes(searchTerm.toLowerCase());
    const categoryMatch = selectedCategory === 'all' || link.category === selectedCategory;
    return searchTermMatch && categoryMatch;
  });

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f7f1e3', fontFamily: 'Cormorant Garamond, serif' }}>
      <h2 className="display-4 text-center mb-4">Library</h2>

      {/* Search and filter options */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <select
          className="form-control mt-2"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="website">Website</option>
          <option value="book">Book</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Display filtered links */}
      <ul className="list-group">
        {filteredLinks.map((link) => (
          <li key={link.id} className="list-group-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="library-link"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Back to Home button */}
      <Link to="/" className="btn btn-outline-info mt-3">
        Back to Home
      </Link>
    </div>
  );
};



