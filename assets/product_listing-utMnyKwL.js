import{l as c,a as n}from"./utils-rALfgH14.js";import{P as l}from"./ProductData-iLemfY2W.js";function d(t){return`
    <li class="product-card">
      <a href="/product_pages/?product=${t.Id}">
        <img src="${t.Images.PrimaryMedium}" alt="${t.NameWithoutBrand}" />
        <h3>${t.Brand.Name}</h3>
        <p>${t.NameWithoutBrand}</p>
        <p class="product-card__price">$${t.FinalPrice}</p>
      </a>
    </li>
  `}class m{constructor(e,r,a){this.category=e,this.dataSource=r,this.listElement=a}async init(){const e=await this.dataSource.getData(this.category);if(!e.length){this.listElement.innerHTML="<li>No products found.</li>";return}this.renderList(e),document.querySelector(".title").textContent=this.category}renderList(e){e.forEach(r=>{this.listElement.insertAdjacentHTML("beforeend",d(r))})}}c();const s=n("category"),i=s?s.toLowerCase():"",o=document.querySelector(".product-list");if(!i)o.innerHTML="<li>No category selected.</li>";else{const t=new l;new m(i,t,o).init().catch(a=>{console.error("Failed to load products:",a),o.innerHTML="<li>Error loading products.</li>"});const r=document.querySelector(".title");r&&(r.textContent=i.split("-").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "))}
