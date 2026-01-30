// import { loadHeaderFooter } from "./utils.mjs";
// import CheckoutProcess from "./CheckoutProcess.mjs";

// loadHeaderFooter();

// const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
// myCheckout.init();

// document
//   .querySelector("#zip")
//   .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));
// // listening for click on the button
// document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
//   e.preventDefault();

//   myCheckout.checkout();
// });

// // this is how it would look if we listen for the submit on the form
// // document.forms['checkout']
// // .addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   // e.target would contain our form in this case
// //    myCheckout.checkout();
// // });
import { loadHeaderFooter, alertMessage } from "./utils.mjs";
import CheckoutProcess from "./CheckoutProcess.mjs";

loadHeaderFooter();

const myCheckout = new CheckoutProcess("so-cart", ".checkout-summary");
myCheckout.init();

// Recalculate totals when zip changes
document
  .querySelector("#zip")
  .addEventListener("blur", myCheckout.calculateOrdertotal.bind(myCheckout));

// Listen to form submission
const form = document.forms["checkout"];
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Remove any previous alerts
  // (checkout() already removes them, but this ensures double safety)
  myCheckout.checkout(); // checkout() now handles validation and success internally
});
