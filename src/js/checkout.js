// src/js/checkout.js

import { getLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  return `
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${item.Name}</h2>
    </a>
    <p class="cart-card__color">${item.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
  </li>`;
}

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const container = document.querySelector(".products");
  if (!container) return;

  if (cartItems.length === 0) {
    container.innerHTML += `<p>Your cart is empty.</p>`;
    return;
  }

  container.innerHTML += `
    <ul class="product-list">
      ${cartItems.map(cartItemTemplate).join("")}
    </ul>
  `;

  // Total price
  const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
  container.innerHTML += `<p class="cart-total"><strong>Total: $${total.toFixed(
    2
  )}</strong></p>`;
}

renderCartContents();
