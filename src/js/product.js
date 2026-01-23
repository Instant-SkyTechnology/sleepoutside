// import { getParam, loadHeaderFooter } from "./utils.mjs";
// import ProductData from "./ProductData.mjs";
// import ProductDetails from "./ProductDetails.mjs";

// loadHeaderFooter();

// const dataSource = new ProductData("tents");
import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const productId = getParam("id");
const dataSource = new ProductData();
const product = new ProductDetails(productId, dataSource);

product.init();

