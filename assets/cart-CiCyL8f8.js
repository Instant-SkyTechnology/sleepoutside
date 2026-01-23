import{l as o,g as e}from"./utils-B25fRPZe.js";o();function s(){const r=(e("so-cart")||[]).map(a=>l(a));document.querySelector(".product-list").innerHTML=r.join("")}function l(t){return`<li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img
        src="${t.Images?.PrimaryMedium||""}"
        alt="${t.NameWithoutBrand}"
      />
    </a>
    <a href="#">
      <h2 class="card__name">${t.Name}</h2>
    </a>
    <p class="cart-card__color">${t.Colors[0].ColorName}</p>
    <p class="cart-card__quantity">qty: 1</p>
    <p class="cart-card__price">$${t.FinalPrice.toFixed(2)}</p>
  </li>`}function n(){const t=e("so-cart")||[];let r=0;t.forEach(c=>{r+=c.FinalPrice});const a=document.querySelector(".list-footer");t.length>0&&a.classList.remove("hide"),document.querySelector(".list-total").textContent=`$${r.toFixed(2)}`}s();n();
