# BYU-Pathway Worldwide Online
## WDD 330 - Web Frontend Development II

### ⛺ SleepOutside Starter Code

 - This repository is the start of the SleepOutside web application project for WDD 330. The repository contains branches which are checkpoints for the team and individual assignments throughout the course.

 - https://byui-cse.github.io/wdd330-ww-course/week01/team.html

### Prerequisites

- You must have Node installed to run the following commands.
[WDD 330 Setup Environment](https://byui-cse.github.io/wdd330-ww-course/intro/) 

### Common Workflow Commands

- `npm run lint` to run ESLint against your code to find errors.
- `npm run format` to run Prettier to automatically format your code.
- `npm run start` starts up a local server and updates on any JS or CSS/SCSS 
- `npm run build` to build final files when you are ready to turn in.


---
_BYU-Pathway Worldwide improves lives through access to spiritually based, online affordable higher education. Its mission is to develop disciples of Jesus Christ who are leaders in their homes, the Church, and their communities._


## Steve KALALA
## W02 Individual Activity: Dynamic Product List

## Task Completed

- This project implements a dynamic product list for the Sleep Outside website.
- Products are loaded from `src/public/json/tents.json`.
- Product cards are generated dynamically using `ProductList.mjs`.
- Each product has an **Add to Cart** button, which stores the product in `localStorage`.
- The home page (src/index.html) no longer has hardcoded product cards.
- Product images are loaded dynamically from the JSON data, including newly added images.
- Additional styling updates were applied for large-screen views, including centered h2 headings and footer text.

## Live Site
https://instant-skytechnology.github.io/sleepoutside/


## Project Structure

- src/index.html – Home page with dynamic product rendering.
- src/js/ProductList.mjs – Generates product cards dynamically.
- src/js/ProductData.mjs – Handles loading product data from JSON.
- src/public/json/tents.json – Contains product data and image paths.
- src/public/images/ – Stores product and brand images.
- src/css/style.css – Global styles and responsive layout updates.

## Steve KALALA
## Sleep Outside (WDD 330)
## W03 Individual Activity: Expand Inventory

This project is part of the BYUI WDD 330 course. It demonstrates
client-side application development using Vite, modular JavaScript,
and API-driven data.

# Final Submission Checklist
# Final Submission Checklist (WDD 330)
# Product Listing Page
- Product listing page exists at src/product_listing/index.html
- Header and footer load correctly
- Clicking Tents, Backpacks, Sleeping Bags, or Hammocks displays the correct products
- Page title updates dynamically (example: Top Products: Tents)
- Product images display correctly
- Clicking a product opens the product detail page
________________________________________
# API & Environment Variables
- .env file exists (renamed from .env.sample)
- VITE_SERVER_URL is set to **https://wdd330-backend.onrender.com/**
- Render environment variables are configured correctly
- ProductData.mjs uses import.meta.env.VITE_SERVER_URL
________________________________________
# Product Detail Page
- Product detail page loads when clicking a product
- findProductById(id) fetches data from **${baseURL}product/${id}**
- Product image displays using PrimaryLarge or PrimaryExtraLarge
- Add-to-cart functionality works
________________________________________
# Cart Page
- Items appear in the cart after adding products
- Product images display correctly in the cart
- Prices display correctly
- Cart total displays correctly
- No console errors on the cart page
________________________________________
# Vite Configuration
- vite.config.js includes the product listing page in Rollup inputs
- Application works locally and when deployed
- No 404 errors on any pages
________________________________________
# Code Quality
- No placeholder product data remains
- API data is used everywhere instead of local JSON
- Folder structure follows assignment instructions
- No important code is commented out
________________________________________
# Console Cleanup
- All console.log() debug statements removed
- Only meaningful console.error() statements remain


# Sleep Outside – Checkout & Unhappy Path (WDD 330 Week 4)

**Author:** Steve KALALA  
**Course:** WDD 330 – Web Frontend Development II  
**Institution:** Brigham Young University–Idaho  

This project is part of the BYUI WDD 330 course. It demonstrates client-side checkout processing, server-side validation handling, dynamic UI feedback, and cart state management using modular JavaScript and Vite.

---

## Project Overview

The **Sleep Outside** application allows users to browse products, add items to a cart, and complete a checkout process.  
Week 4 focuses on implementing the **checkout flow**, handling **server-side validation errors**, and providing a smooth **user experience for failure cases (unhappy path)**.


## Final Submission Checklist (Week 4)

### Checkout Page
- Checkout page exists at `src/checkout/index.html`
- Header and footer load correctly
- Cart summary displays correct item count and subtotal
- Shipping, tax, and order total calculate correctly
- Order totals update when ZIP code loses focus
- Checkout button submits via JavaScript (no page reload)

### Form Validation & Unhappy Path Handling
- Checkout remains on the same page when validation fails
- Server-side validation errors are displayed clearly
- Error messages appear at the **top of the checkout form**
- Errors are displayed using a custom alert (not `alert()`)
- Multiple validation errors display correctly
- Alert messages are dismissible using an “X”
- Page scrolls to the top when an error occurs

### Successful Checkout Flow
- Successful checkout clears the cart (`so-cart`)
- User is redirected to `checkout/success.html`
- “Checkout successful!” message displays correctly
- Success message does **not** appear when validation fails

### Cart Functionality
- Products persist in cart using `localStorage`
- Cart page displays all added items
- Product images display correctly
- Prices and totals calculate correctly
- Checkout button appears only when cart has items

### Cart Icon Badge
- Cart icon displays item count badge
- Badge updates dynamically when items are added
- Badge appears on:
  - Home page
  - Cart page
  - Product listing pages
- Badge hides when cart is empty
- Badge positioning is visually aligned with cart icon

### Utilities & Reusability
- `alertMessage()` utility implemented in `utils.mjs`
- `removeAllAlerts()` clears previous alerts before new ones display
- Alert utility is reusable across checkout and product pages
- Header and footer load dynamically using `loadHeaderFooter()`

### Vite & Deployment
- Application works correctly in development mode
- Application works correctly when deployed to GitHub Pages
- `base` path is configured correctly in `vite.config.js`
- No broken paths or missing assets in production
- No 404 errors on deployed pages

### Code Quality
- Modular JavaScript architecture
- No duplicate event listeners
- No commented-out production code
- No hard-coded validation messages
- Folder structure follows assignment instructions

### Console Cleanup
- All `console.log()` debug statements removed
- Only meaningful `console.error()` statements remain
- No console errors during normal application use

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES Modules)
- Vite
- LocalStorage
- REST API

## Deployment
The project is deployed using **GitHub Pages** with a Vite production build (`dist` folder).

## 📄 License
This project is for educational purposes as part of the BYUI WDD 330 course.



