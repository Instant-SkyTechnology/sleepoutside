import{r as d}from"./utils-D60oWEjl.js";import{P as i}from"./ProductData-qNGRqBO6.js";function o(t){return`
    <li class="product-card">
      <a href="product_pages/?products=${t.Id}">
        <img src="${t.Image}" alt="Image of ${t.Name}">
        <h2 class="card__brand">${t.Brand.Name}</h2>
        <h3 class="card__name">${t.Name}</h3>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
      <button class="add-to-cart" data-id="${t.Id}">Add to Cart</button>
    </li>
  `}class n{constructor(a,r,e){this.category=a,this.dataSource=r,this.listElement=e}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){d(o,this.listElement,a),this.listElement.querySelectorAll(".add-to-cart").forEach(e=>{e.addEventListener("click",()=>{this.addToCart(e.dataset.id,a)})})}addToCart(a,r){const e=r.find(c=>c.Id===a);if(!e)return;const s=JSON.parse(localStorage.getItem("cart"))||[];s.push(e),localStorage.setItem("cart",JSON.stringify(s)),alert(`Added ${e.Name} to cart!`)}}const l=document.querySelector(".product-list"),m=new i("tents"),u=new n("tents",m,l);u.init();
