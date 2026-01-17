// ProductList.mjs
import { renderListWithTemplate } from './utils.mjs';

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/?product=${product.id}">
      <img src="${product.img}" alt="Image of ${product.name}">
      <h2 class="card__brand">${product.brand}</h2>
      <h3 class="card__name">${product.name}</h3>
      <p class="product-card__price">$${product.price}</p>
    </a>
    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
  </li>`;
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

    // ① Now add the event listeners
    const buttons = this.listElement.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.addToCart(button.dataset.id, list);
      });
    });
  }

  addToCart(productId, list) {
    const product = list.find(p => p.id === productId);
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added ${product.name} to cart!`);
  }
}
