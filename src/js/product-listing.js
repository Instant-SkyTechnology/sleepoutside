// src/js/product-listing.js
import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// Load header/footer
loadHeaderFooter();

// Get category from URL query string
const categoryParam = getParam("category"); // tents, backpacks, sleeping-bags, hammocks
const category = categoryParam ? categoryParam.toLowerCase() : "";

// Product list container
const listElement = document.querySelector(".product-list");

// Show message if no category
if (!category) {
  listElement.innerHTML = "<li>No category selected.</li>";
} else {
  const dataSource = new ProductData();
  const productList = new ProductList(category, dataSource, listElement);

  productList.init().catch(err => {
    console.error("Failed to load products:", err);
    listElement.innerHTML = "<li>Error loading products.</li>";
  });
}
