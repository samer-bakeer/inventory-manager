# Grocery Inventory Manager

### A Lightweight, High-Performance React App for Cashier Efficiency

[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vanilla CSS](https://img.shields.io/badge/CSS3-264DE4?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Challenge Summary

A small grocery store struggles with inefficient inventory lookup — cashiers waste time scrolling through long product names like _“Gluten-Free Whole Grain Multigrain Bread”_.

This app solves it by providing:

- Real-time text search (case-insensitive, substring match)
- Category filtering (Grocery, Bakery, Beverages, Dairy)
- Combined filters (search + category work together instantly)
- Graceful handling of long names (ellipsis + tooltip on hover)
- Dynamic results counter & empty-state feedback

No submit button. No typos handling. Just speed and clarity.

## UI Highlights

- **Search bar** with clear (×) button and focus-enhanced styling
- **Category filters** as tactile, color-coded buttons (not dropdowns) — faster for mouse/touch
- **Item cards** with left accent border colored by category
- **Responsive grid** — works on desktops, tablets, and compact cashier screens
- **Performance-aware**: `useMemo` prevents unnecessary re-renders during filtering

Designed for fatigue reduction: minimal cognitive load, high scannability.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation & Run

```bash
git clone https://github.com/samer-bakeer/inventory-manager.git
cd inventory-manager
npm install
npm run dev
```
