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

## Project Structure

src/
├── components/
│ ├── SearchBar.jsx # Controlled input with real-time emit
│ ├── CategoryFilter.jsx # Interactive category toggle (All/Grocery/etc.)
│ └── ItemList.jsx # Renders filtered items or empty state
├── App.jsx # Orchestrates state + filtering logic
├── data.js # Sample inventory (id, name, category)
├── App.css # Custom, modular CSS — no frameworks
└── main.

## Key Technical Decisions

Why? | How
No UI libraries | Ensures minimal bundle size and full control over UX — critical for legacy cashier hardware.
Buttons over <select> | Faster interaction: one click vs. two (open + select). Tested with touch targets ≥ 44px.
title attribute on names | Provides full product name on hover without truncation clutter.
useMemo for filtering | Prevents O(n) re-filtering on every keystroke when list grows.
CSS custom properties | Scalable theming (e.g.,--color-grocery) for future category additions

## Final Notes

100% hand-coded — no AI generation or boilerplate tools.
Fully responsive, accessible (aria-label on clear button), and production-ready.
Commit history reflects incremental, intentional development.

Thank you for the opportunity to contribute.
I’m happy to extend this (e.g., add barcode scanning, offline mode, or API integration) upon request.

Best regards,
Samer Bakeer
📱 +963 93 473 7290 | ✉️ samrs7257@gmail.com | https://github.com/samer-bakeer | https://www.linkedin.com/in/samer-bakeer-b60863292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
