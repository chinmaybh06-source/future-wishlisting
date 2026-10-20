
const categoryInfo = {
  apple:{title:"Apple",sub:"Technology, considered.",description:"A shortlist of devices chosen for everyday creativity, productivity and a clean ecosystem.",file:"apple.html"},
  ikea:{title:"IKEA",sub:"A calmer place to think.",description:"Thoughtful furniture and lighting for a simple, functional workspace and home.",file:"ikea.html"},
  nothing:{title:"Nothing",sub:"Different by design.",description:"Distinctive devices with a minimalist design language and a software experience that stays out of the way.",file:"nothing.html"},
  rolex:{title:"Rolex",sub:"Timeless by design.",description:"A long-term watch wishlist, with official retail prices distinguished from resale-market prices.",file:"rolex.html"},
  "royal-enfield":{title:"Royal Enfield",sub:"Made for the open road.",description:"Motorcycles with character, heritage and a focus on the ride. Prices depend on variant and city.",file:"royal-enfield.html"}
};
const artFor = {apple:"images/apple/macbook-air.svg",ikea:"images/ikea/lamp.svg",nothing:"images/nothing/phone.svg",rolex:"images/rolex/oyster-perpetual.svg","royal-enfield":"images/royal-enfield/classic-350.svg"};
function productCard(p){
  return `<article class="product-card reveal">
    <div class="product-image"><img src="${p.image}" alt="${p.name} local placeholder artwork" loading="lazy"></div>
    <div class="product-body">
      <div class="product-tag">${p.tag}</div><h3>${p.name}</h3>
      <p class="price">${p.price}</p><div class="price-type">${p.priceType}</div>
      <ul class="features">${p.features.map(x=>`<li>${x}</li>`).join("")}</ul>
      <div class="product-actions"><a class="source-link" href="${p.source}" target="_blank" rel="noopener noreferrer">Official product source ↗</a></div>
      <p class="small-note">${p.note}</p>
    </div>
  </article>`;
}
function footer(){return `<footer class="footer"><strong>FUTURE</strong><span>A personal wishlist. Not affiliated with any listed brand.</span><span>Prices checked: 20 Oct 2026 · Verify before buying.</span></footer>`}
function nav(){return `<nav class="nav"><a class="logo" href="index.html">FUTURE</a><div class="navlinks"><a href="apple.html">Apple</a><a href="ikea.html">IKEA</a><a href="nothing.html">Nothing</a><a href="rolex.html">Rolex</a><a href="royal-enfield.html">Royal Enfield</a></div></nav>`}
function initHome(){
 const root=document.getElementById("app");
 root.innerHTML=nav()+`
 <header class="hero"><div class="eyebrow fade-up">A personal collection · Est. 2026</div><h1 class="fade-up delay-1">Things worth<br>waiting for.</h1><p class="fade-up delay-2">A considered collection of objects I hope to own someday. Good design, useful technology and a little bit of dream.</p><a class="pill fade-up delay-2" href="#collection">Explore collection&nbsp; ↘</a></header>
 <main class="wrap" id="collection"><div class="section-head"><div><div class="eyebrow">THE COLLECTION</div><h2>Five worlds. One wishlist.</h2></div><p>Curated, not crowded.</p></div><div class="category-grid">
 ${Object.entries(categoryInfo).map(([key,c],i)=>`<a class="category-card reveal" href="${c.file}"><div><div class="eyebrow">${String(i+1).padStart(2,"0")} / COLLECTION</div><h3>${c.title}</h3><p>${c.sub}</p></div><div class="category-art"><img src="${artFor[key]}" alt="" loading="lazy"></div><span class="arrow">↗</span></a>`).join("")}
 </div><div class="notice"><strong>A note on prices.</strong> Prices are reference points, not guaranteed live quotes. Retailer promotions, configurations, variants and location can change the final amount. Open the source link and verify before making a decision. Local SVG art is included as a placeholder; replace it with product photographs you have permission to host.</div></main>${footer()}`;
 observeReveals();
}
function initCategory(key){
 const c=categoryInfo[key], arr=COLLECTION[key]||[];
 const root=document.getElementById("app");
 root.innerHTML=nav()+`<main class="wrap"><header class="page-hero"><div class="eyebrow">FUTURE / COLLECTION ${Object.keys(categoryInfo).indexOf(key)+1}</div><h1>${c.title}</h1><p>${c.description}</p></header><div class="section-head"><div><div class="eyebrow">THE SHORTLIST</div><h2>${arr.length} objects to consider.</h2></div><a class="text-link" href="index.html">← All collections</a></div><div class="product-grid">${arr.map(productCard).join("")}</div><div class="notice">Price and product details are provided as a starting point, not a guarantee of availability. For Apple and IKEA, listings can vary by configuration and stock. For Rolex, official retail pricing is not the same as secondary-market pricing. For Royal Enfield, check your local city, chosen variant, registration, insurance and on-road costs. Nothing pricing should be confirmed with its official India store or authorised retailer. <br><br>Images in this starter project are locally stored illustrative SVG placeholders, not official product photos. Replace them with images you are permitted to use.</div></main>${footer()}`;
 observeReveals();
}
function observeReveals(){
 const items=document.querySelectorAll(".reveal");
 if(!("IntersectionObserver" in window)){items.forEach(x=>x.classList.add("visible"));return;}
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});
 items.forEach(x=>io.observe(x));
}
