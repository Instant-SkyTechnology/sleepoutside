// ProductList.mjs
import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="Image of ${product.Name}">
        <h2 class="card__brand">${product.Brand.Name}</h2>
        <h3 class="card__name">${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
      <button class="add-to-cart" data-id="${product.Id}">Add to Cart</button>
    </li>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    this.renderList(list);
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);

    // Add event listeners to the dynamically created buttons
    const buttons = this.listElement.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.addToCart(button.dataset.id, list);
      });
    });
  }

  addToCart(productId, list) {
    const product = list.find(p => p.Id === productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${product.Name} to cart!`);
  }
}


// import { renderListWithTemplate } from "./utils.mjs";

// function productCardTemplate(product) {
//   return `
//     <li class="product-card">
//       <a href="product_pages/?products=${product.Id}">
//         <img src="${product.Image}" alt="${product.Name}">
//         <h2>${product.Brand.Name}</h2>
//         <h3>${product.Name}</h3>
//         <p class="product-card__price">$${product.FinalPrice}</p>
//       </a>
//       <button class="add-to-cart" data-product-id="${product.Id}">Add to Cart</button>
//     </li>
//   `;
// }


// export default class ProductList {
//   constructor(category, dataSource, listElement) {
//     this.category = category;
//     this.dataSource = dataSource;
//     this.listElement = listElement;
//   }

//   async init() {
//     const list = await this.dataSource.getData();
//     this.renderList(list);
//   }

//   renderList(list) {
//     const htmlStrings = list.map(productCardTemplate);
//     this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

//     // apply use new utility function instead of the commented code above
//     renderListWithTemplate(productCardTemplate, this.listElement, list);

//   }

// }
