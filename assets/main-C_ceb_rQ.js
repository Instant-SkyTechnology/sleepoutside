import"./style-k1giqee7.js";import{P as i}from"./ProductData-dO4g7Skd.js";function o(t){return`
    <li class="product-card">
      <a href="product_pages/?products=${t.Id}">
        <img src="${t.Image}" alt="${t.Name}">
        <h2>${t.Brand.Name}</h2>
        <h3>${t.Name}</h3>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
      <button class="add-to-cart" data-product-id="${t.Id}">Add to Cart</button>
    </li>
  `}class d{constructor(a,r,e){this.category=a,this.dataSource=r,this.listElement=e}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){renderListWithTemplate(o,this.listElement,a),this.listElement.querySelectorAll(".add-to-cart").forEach(e=>{e.addEventListener("click",()=>{this.addToCart(e.dataset.id,a)})})}addToCart(a,r){const e=r.find(c=>c.Id===a);if(!e)return;const s=JSON.parse(localStorage.getItem("cart"))||[];s.push(e),localStorage.setItem("cart",JSON.stringify(s)),alert(`Added ${e.Name} to cart!`)}}const n=document.querySelector(".product-list"),l=new i("tents"),u=new d("tents",l,n);u.init();
