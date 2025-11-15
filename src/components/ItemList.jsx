
import React from 'react';

const CATEGORY_COLORS = {
  Grocery: '#5c9e4e',
  Bakery: '#e48c2a',
  Beverages: '#3b82f6',
  Dairy: '#ec4899',
};

export default function ItemList({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No matching items.</p>
        <p>Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <div
          key={item.id}
          className="item-card"
          style={{ borderLeftColor: CATEGORY_COLORS[item.category] || '#718096' }}
        >
          <div className="item-content">
            <h3
              className="item-name"
              title={item.name}
            >
              {item.name}
            </h3>
            <span
              className="category-tag"
              style={{ backgroundColor: CATEGORY_COLORS[item.category] || '#cbd5e0' }}
            >
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}