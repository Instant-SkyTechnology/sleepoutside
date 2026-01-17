import ProductList from './ProductList.mjs';
import ProductData from './ProductData.mjs';

const productListContainer = document.querySelector('#product-list');
const dataSource = new ProductData(); // Must have getData() method returning array of products

const productList = new ProductList('tents', dataSource, productListContainer);
productList.init();
