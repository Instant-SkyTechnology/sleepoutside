import{g as c,l}from"./utils-Bq0YlQvM.js";function n(a){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${a.Images.PrimaryMedium}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${a.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`}class i{constructor(t,e){this.key=t,this.parentSelector=e,this.total=0}async init(){const t=c(this.key);this.calculateListTotal(t),this.renderCartContents(t);const e=document.querySelector("#cart-badge");e&&(e.innerText=t.length,e.style.display=t.length>0?"inline-block":"none")}calculateListTotal(t){const e=t.map(r=>r.FinalPrice);this.total=e.reduce((r,o)=>r+o,0)}renderCartContents(){const e=c(this.key).map(r=>n(r));document.querySelector(this.parentSelector).innerHTML=e.join(""),document.querySelector(".list-total").innerText+=` $${this.total}`}}l();const s=new i("so-cart",".product-list");s.init();s.total>0&&document.querySelector(".list-footer").classList.remove("hide");
