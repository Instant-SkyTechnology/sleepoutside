import{r as i}from"./utils-D60oWEjl.js";import{P as o}from"./ProductData-dO4g7Skd.js";function n(a){return`
    <li class="product-card">
      <a href="product_pages/?products=${a.Id}">
        <img src="${a.Image}" alt="${a.Name}">
        <h2>${a.Brand.Name}</h2>
        <h3>${a.Name}</h3>
        <p class="product-card__price">$${a.FinalPrice}</p>
      </a>
    </li>
  `}class d{constructor(t,r,e){this.category=t,this.dataSource=r,this.listElement=e}async init(){const t=await this.dataSource.getData();this.renderList(t)}renderList(t){i(n,this.listElement,t),this.listElement.querySelectorAll(".add-to-cart").forEach(e=>{e.addEventListener("click",()=>{this.addToCart(e.dataset.id,t)})})}addToCart(t,r){const e=r.find(c=>c.Id===t);if(!e)return;const s=JSON.parse(localStorage.getItem("cart"))||[];s.push(e),localStorage.setItem("cart",JSON.stringify(s)),alert(`Added ${e.Name} to cart!`)}}const l=document.querySelector(".product-list"),m=new o("tents"),u=new d("tents",m,l);u.init();
