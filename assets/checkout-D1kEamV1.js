import{g as c,s as n,r as l,a as h,l as u}from"./utils-CQ6Hs-Dj.js";function m(o){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${o.Images.PrimaryMedium}"
      alt="${o.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${o.Name}</h2>
  </a>
  <p class="cart-card__color">${o.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${o.FinalPrice}</p>
</li>`}class d{constructor(e,t){this.key=e,this.parentSelector=t,this.total=0}async init(){const e=c(this.key);this.calculateListTotal(e),this.renderCartContents(e)}calculateListTotal(e){const t=e.map(s=>s.FinalPrice);this.total=t.reduce((s,a)=>s+a)}renderCartContents(){const t=c(this.key).map(s=>m(s));document.querySelector(this.parentSelector).innerHTML=t.join(""),document.querySelector(".list-total").innerText+=` $${this.total}`}}const p=new d;function g(o){const e=new FormData(o),t={};return e.forEach(function(s,a){t[a]=s}),t}function y(o){return o.map(t=>(console.log(t),{id:t.Id,price:t.FinalPrice,name:t.Name,quantity:1}))}class T{constructor(e,t){this.key=e,this.outputSelector=t,this.list=[],this.itemTotal=0,this.shipping=0,this.tax=0,this.orderTotal=0}init(){this.list=c(this.key),this.calculateItemSummary()}calculateItemSummary(){const e=document.querySelector(this.outputSelector+" #cartTotal"),t=document.querySelector(this.outputSelector+" #num-items");t.innerText=this.list.length;const s=this.list.map(a=>a.FinalPrice);this.itemTotal=s.reduce((a,i)=>a+i),e.innerText="$"+this.itemTotal}calculateOrdertotal(){this.shipping=10+(this.list.length-1)*2,this.tax=(this.itemTotal*.06).toFixed(2),this.orderTotal=(parseFloat(this.itemTotal)+parseFloat(this.shipping)+parseFloat(this.tax)).toFixed(2),this.displayOrderTotals()}displayOrderTotals(){const e=document.querySelector(this.outputSelector+" #shipping"),t=document.querySelector(this.outputSelector+" #tax"),s=document.querySelector(this.outputSelector+" #orderTotal");e.innerText="$"+this.shipping,t.innerText="$"+this.tax,s.innerText="$"+this.orderTotal}async checkout(){const e=document.forms.checkout,t=g(e);t.orderDate=new Date,t.orderTotal=this.orderTotal,t.tax=this.tax,t.shipping=this.shipping,t.items=y(this.list),console.log(t);try{const s=await p.checkout(t);console.log(s),n("so-cart",[]),location.assign("/checkout/success.html")}catch(s){l();for(let a in s.message)h(s.message[a]);console.log(s)}}}u();const r=new T("so-cart",".checkout-summary");r.init();document.querySelector("#zip").addEventListener("blur",r.calculateOrdertotal.bind(r));document.querySelector("#checkoutSubmit").addEventListener("click",o=>{o.preventDefault(),r.checkout()});
