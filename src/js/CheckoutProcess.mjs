import {
  setLocalStorage,
  getLocalStorage,
  alertMessage,
  removeAllAlerts,
} from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const services = new ExternalServices();

function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};
  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });
  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => ({
    id: item.Id,
    price: item.FinalPrice,
    name: item.Name,
    quantity: 1,
  }));
  return simplifiedItems;
}

export default class CheckoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }

  init() {
    this.list = getLocalStorage(this.key);
    this.calculateItemSummary();
  }

  calculateItemSummary() {
    const summaryElement = document.querySelector(
      this.outputSelector + " #cartTotal"
    );
    const itemNumElement = document.querySelector(
      this.outputSelector + " #num-items"
    );
    itemNumElement.innerText = this.list.length;
    const amounts = this.list.map((item) => item.FinalPrice);
    this.itemTotal = amounts.reduce((sum, item) => sum + item, 0);
    summaryElement.innerText = "$" + this.itemTotal;
  }

  calculateOrdertotal() {
    this.shipping = 10 + (this.list.length - 1) * 2;
    this.tax = (this.itemTotal * 0.06).toFixed(2);
    this.orderTotal = (
      parseFloat(this.itemTotal) +
      parseFloat(this.shipping) +
      parseFloat(this.tax)
    ).toFixed(2);
    this.displayOrderTotals();
  }

  displayOrderTotals() {
    const shipping = document.querySelector(this.outputSelector + " #shipping");
    const tax = document.querySelector(this.outputSelector + " #tax");
    const orderTotal = document.querySelector(
      this.outputSelector + " #orderTotal"
    );
    shipping.innerText = "$" + this.shipping;
    tax.innerText = "$" + this.tax;
    orderTotal.innerText = "$" + this.orderTotal;
  }

  async checkout() {
    const formElement = document.forms["checkout"];
    const errors = [];

    // CLIENT-SIDE VALIDATION
    for (const field of formElement.elements) {
      if (field.required && !field.value.trim()) {
        // Convert field name to readable message
        const fieldName = field.name.replace(/([A-Z])/g, " $1");
        errors.push({
          message:
            fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + " is required",
        });
      }
    }

    if (errors.length > 0) {
      // Remove old alerts and show new
      removeAllAlerts();
      errors.forEach((err) => alertMessage(err.message));
      return; // stop checkout if there are errors
    }

    // If form is valid, continue checkout
    const json = formDataToJSON(formElement);
    json.orderDate = new Date();
    json.orderTotal = this.orderTotal;
    json.tax = this.tax;
    json.shipping = this.shipping;
    json.items = packageItems(this.list);

    try {
      const res = await services.checkout(json);
      console.log(res);
      setLocalStorage("so-cart", []);
      location.assign("/checkout/success.html");
    } catch (err) {
      // Handle any service errors
      removeAllAlerts();
      if (err.message && Array.isArray(err.message)) {
        err.message.forEach((msg) => alertMessage(msg));
      } else {
        alertMessage("Checkout failed. Please try again.");
      }
      console.log(err);
    }
  }
}
