import{g as s,l as n,u as o}from"./utils-6qRlUkoY.js";function l(e){return`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${e.Images.PrimaryMedium}" alt="${e.Name}" />
    </a>
    <a href="#">
      <h2 class="card__name">${e.Name}</h2>
    </a>
    <p class="cart-card__color">${e.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${e.FinalPrice}</p>
  </li>`}class i{constructor(t,a){this.key=t,this.parentSelector=a,this.total=0}async init(){const t=s(this.key)||[];this.calculateListTotal(t),this.renderCartContents(t);const a=document.querySelector("#cart-badge");a&&(a.innerText=t.length,a.style.display=t.length>0?"inline-block":"none")}calculateListTotal(t){const a=t.map(r=>r.FinalPrice);this.total=a.reduce((r,c)=>r+c,0)}renderCartContents(t){const a=t.map(c=>l(c));document.querySelector(this.parentSelector).innerHTML=a.join("");const r=document.querySelector(".list-total");r&&(r.innerText=`$${this.total}`)}}async function d(){await n(),o(),await new i("so-cart",".product-list").init()}d();
