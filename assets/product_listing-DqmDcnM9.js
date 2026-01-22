import{l as n,a as l}from"./utils-rALfgH14.js";import{P as d}from"./ProductData-Dxvez2KG.js";class u{constructor(e,r,a){this.category=e,this.dataSource=r,this.parentElement=a}async init(){const e=await this.dataSource.getData(this.category);if(!e.length){this.parentElement.innerHTML="<li>No products found.</li>";return}const r=e.map(t=>`
      <li class="product-card">
        <a href="/sleepoutside/product_pages/index.html?id=${t.Id}">
          <img src="${t.Images?.PrimaryMedium||t.Image}" alt="${t.NameWithoutBrand}">
          <h3>${t.Name}</h3>
          <p class="brand">${t.Brand?.Name||""}</p>
          <p class="price">$${t.FinalPrice.toFixed(2)}</p>
        </a>
      </li>
    `).join("");this.parentElement.innerHTML=r;const a=document.querySelector(".page-title");a&&(a.textContent=`Top Products: ${this.category.replace("-"," ").replace(/\b\w/g,t=>t.toUpperCase())}`)}}n();const i=l("category"),s=i?i.toLowerCase():"",o=document.querySelector(".product-list");if(!s)o.innerHTML="<li>No category selected.</li>";else{const c=new d;new u(s,c,o).init().catch(r=>{console.error("Failed to load products:",r),o.innerHTML="<li>Error loading products.</li>"})}
