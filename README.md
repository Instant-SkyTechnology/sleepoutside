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