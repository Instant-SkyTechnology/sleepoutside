export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path)
      .then(res => {
        if (!res.ok) throw new Error("Bad Response");
        return res.json();
      });
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}

