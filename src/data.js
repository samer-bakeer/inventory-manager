
export const ITEMS = [
  { id: 1, name: "Organic Extra Virgin Olive Oil 1L", category: "Grocery" },
  { id: 2, name: "Gluten-Free Whole Grain Multigrain Bread", category: "Bakery" },
  { id: 3, name: "Cold-Pressed Unsweetened Almond Milk 1L", category: "Beverages" },
  { id: 4, name: "Free-Range Large Brown Eggs, Dozen Pack", category: "Dairy" },
  { id: 5, name: "Freshly Roasted Colombian Coffee Beans 500g", category: "Beverages" },
];

export const CATEGORIES = ["All", ...new Set(ITEMS.map(item => item.category))];