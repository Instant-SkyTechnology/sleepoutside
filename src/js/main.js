import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';

const productListContainer = document.querySelector('.product-list');

const dataSource = new ProductData('tents');

const productList = new ProductList('tents', dataSource, productListContainer);
productList.init();


// import ProductData from "./ProductData.mjs";
// import ProductList from "./ProductList.mjs";

// const dataSource = new ProductData("tents");

// const element = document.querySelector(".product-list");

// const productList = new ProductList("Tents", dataSource, element);

// productList.init();
