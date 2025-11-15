
import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">Search items:</label>
      <div className="input-group">
        <span className="icon">🔍</span>
        <input
          id="search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. olive oil, bread..."
          autoComplete="off"
        />
        {value && (
          <button
            className="clear-btn"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}