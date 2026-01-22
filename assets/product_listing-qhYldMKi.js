import{l,a as n,r as c}from"./utils-CTidyZBE.js";import{P as i}from"./ProductData-Dy9N5VJP.js";l();const t=n("category"),o=t||"",a=document.querySelector(".product-list");function s(e){return`
    <li class="product-card">
      <a href="${e.WebUrl||e.Url}">
        <img src="${e.Images?.PrimaryExtraLarge||"/images/placeholder.svg"}" 
             alt="${e.NameWithoutBrand||"No Name"}">
        <h3>${e.Brand?.Name||"Brand Unknown"}</h3>
        <p>${e.NameWithoutBrand||"No Name"}</p>
        <p class="product-card__price">$${e.FinalPrice||0}</p>
        ${e.Colors?.length?`<p class="product-card__color">Color: ${e.Colors[0].ColorName}</p>`:""}
      </a>
    </li>
  `}o?new i().getData(o).then(r=>{console.log("API returned products:",r),!r||r.length===0?a.innerHTML="<li>No products found.</li>":c(s,a,r),document.querySelector(".title").textContent=t.replace("-"," ")}).catch(r=>{console.error("Failed to fetch products:",r),a.innerHTML="<li>Error loading products.</li>"}):a.innerHTML="<li>No category selected.</li>";
