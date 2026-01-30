// import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";

// loadHeaderFooter();

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   const htmlItems = cartItems.map(item => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }

// function cartItemTemplate(item) {
//   return `<li class="cart-card divider">
//     <a href="#" class="cart-card__image">
//       <img
//         src="${item.Images?.PrimaryMedium || ""}"
//         alt="${item.NameWithoutBrand}"
//       />
//     </a>
//     <a href="#">
//       <h2 class="card__name">${item.Name}</h2>
//     </a>
//     <p class="cart-card__color">${item.Colors[0].ColorName}</p>
//     <p class="cart-card__quantity">qty: 1</p>
//     <p class="cart-card__price">$${item.FinalPrice.toFixed(2)}</p>
//   </li>`;
// }

// function renderCartTotal() {
//   const cartItems = getLocalStorage("so-cart") || [];
//   let total = 0;

//   cartItems.forEach(item => {
//     total += item.FinalPrice;
//   });

//   const footer = document.querySelector(".list-footer");
//   if (cartItems.length > 0) {
//     footer.classList.remove("hide");
//   }

//   document.querySelector(".list-total").textContent =
//     `$${total.toFixed(2)}`;
// }

// renderCartContents();
// renderCartTotal();

// import { getLocalStorage, loadHeaderFooter } from "./utils.mjs";
// import ShoppingCart from "./ShoppingCart.mjs";

// loadHeaderFooter();

// const cart = new ShoppingCart("so-cart", ".product-list");
// cart.init();
// if (cart.total > 0) {
//   // show our checkout button and total if there are items in the cart.
//   document.querySelector(".list-footer").classList.remove("hide");
// }
import { loadHeaderFooter, updateCartBadge } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

async function initCart() {
  await loadHeaderFooter();       // wait for header
  updateCartBadge();              // update badge on cart page

  const myCart = new ShoppingCart("so-cart", ".product-list");
  await myCart.init();            // populate cart items
}

initCart();




