
import React from 'react';

const CATEGORY_STYLES = {
  All: { bg: '#e2e8f0', color: '#4a5568' },
  Grocery: { bg: '#5c9e4e', color: 'white' },
  Bakery: { bg: '#e48c2a', color: 'white' },
  Beverages: { bg: '#3b82f6', color: 'white' },
  Dairy: { bg: '#ec4899', color: 'white' },
};

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter">
      <label>Filter by category:</label>
      <div className="buttons">
        {Object.keys(CATEGORY_STYLES).map((category) => {
          const { bg, color } = CATEGORY_STYLES[category];
          const isActive = selected === category;
          return (
            <button
              key={category}
              className={`cat-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(category)}
              style={{
                backgroundColor: isActive ? bg : `${bg}33`,
                color: isActive ? color : '#4a5568',
                border: isActive ? 'none' : `1px solid ${bg}66`,
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}