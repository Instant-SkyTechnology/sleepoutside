import { loadHeaderFooter, updateCartBadge } from "./utils.mjs";

async function initSite() {
  await loadHeaderFooter();
  updateCartBadge(); // updates badge on ALL pages
}

initSite();

// import { loadHeaderFooter, updateCartBadge } from "./utils.mjs";

// async function initPage() {
//   await loadHeaderFooter(); // wait for header/footer to finish
//   updateCartBadge();        // now the badge element exists
// }

// initPage();

// import { loadHeaderFooter, updateCartBadge } from "./utils.mjs";

// async function initSite() {
//   await loadHeaderFooter();

//   // Update badge whenever cart changes
//   window.addEventListener("storage", updateCartBadge);

//   // Optional: also update badge periodically in case dynamic content replaces header
//   setInterval(updateCartBadge, 500);
// }

// initSite();

