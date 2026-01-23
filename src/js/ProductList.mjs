export default class ProductList {
  constructor(category, dataSource, parentElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.parentElement = parentElement;
  }

  async init() {
    const products = await this.dataSource.getData(this.category);

    if (!products.length) {
      this.parentElement.innerHTML = "<li>No products found.</li>";
      return;
    }

    const html = products.map(p => `
      <li class="product-card">
        <a href="/sleepoutside/product_pages/index.html?id=${p.Id}">
          <img src="${p.Images?.PrimaryMedium || p.Image}" alt="${p.NameWithoutBrand}">
          <h3>${p.Name}</h3>
          <p class="brand">${p.Brand?.Name || ""}</p>
          <p class="price">$${p.FinalPrice.toFixed(2)}</p>
        </a>
      </li>
    `).join("");

    this.parentElement.innerHTML = html;

    // ADD CATEGORY TO TITLE (correct selector)
    document.querySelector(".title").textContent =
      this.category.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase());
  }
}
