import{l as s,b as n}from"./utils-DgOJ4AhL.js";import{P as l}from"./ProductData-CJRSSPp0.js";class d{constructor(e,r,t){this.category=e,this.dataSource=r,this.parentElement=t}async init(){const e=await this.dataSource.getData(this.category);if(!e.length){this.parentElement.innerHTML="<li>No products found.</li>";return}const r=e.map(t=>`
      <li class="product-card">
        <a href="/sleepoutside/product_pages/index.html?id=${t.Id}">
          <img src="${t.Images?.PrimaryMedium||t.Image}" alt="${t.NameWithoutBrand}">
          <h3>${t.Name}</h3>
          <p class="brand">${t.Brand?.Name||""}</p>
          <p class="price">$${t.FinalPrice.toFixed(2)}</p>
        </a>
      </li>
    `).join("");this.parentElement.innerHTML=r,document.querySelector(".title").textContent=this.category.replace("-"," ").replace(/\b\w/g,t=>t.toUpperCase())}}s();const c=n("category"),i=c?c.toLowerCase():"",a=document.querySelector(".product-list");if(!i)a.innerHTML="<li>No category selected.</li>";else{const o=new l;new d(i,o,a).init().catch(r=>{console.error("Failed to load products:",r),a.innerHTML="<li>Error loading products.</li>"})}
