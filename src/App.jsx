
import React, { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ItemList from './components/ItemList';
import { ITEMS, CATEGORIES } from './data';
import './App.css';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = useMemo(() => {
    return ITEMS.filter(item => {
      const matchesSearch = searchTerm
        ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

      const matchesCategory = selectedCategory === 'All'
        ? true
        : item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="app">
      <header className="header">
        <h1> Grocery Inventory Manager</h1>
        <p>Fast item lookup for cashiers</p>
      </header>

      <main className="main-content">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="results-count">
          {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
        </div>

        <ItemList items={filteredItems} />
      </main>
    </div>
  );
}