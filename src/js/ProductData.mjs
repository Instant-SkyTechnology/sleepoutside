const baseURL = import.meta.env.VITE_SERVER_URL;

export default class ProductData {
  constructor() {}

  async getData(category) {
    try {
      const response = await fetch(`${baseURL}products/search/${category}`);
      const data = await response.json();
      return data.Result || [];
    } catch (err) {
      console.error("Error fetching products:", err);
      return [];
    }
  }

  async findProductById(id) {
  const response = await fetch(`${baseURL}product/${id}`);
  const data = await response.json();
  return data.Result;
}

}
