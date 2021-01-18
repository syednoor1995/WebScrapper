const constant = {
    "amazon": {
        
        productURL : `https://www.amazon.ae/Apple-iPhone-Pro-Facetime-International/dp/B08L5NRZNW/ref=sr_1_1?crid=14588A998DKMZ&dchild=1&keywords=iphone+12+pro+256gb&qid=1610906632&sprefix=iphone+12+pro+128%2Caps%2C283&sr=8-1`,
        priceSelector : `#priceblock_ourprice`,
        titleSelector : `#productTitle`,
        descriptionSelector : `#productDescription p`,
        imageSelector : `#landingImage`,
        imageAttr : `data-old-hires`
    },
    "noon": {
        
        productURL : `https://www.noon.com/uae-en/iphone-12-pro-with-facetime-256gb-pacific-blue-5g-international-specs/N41247235A/p?o=cfab59c09cab747b`,
        priceSelector : `.priceNow`,
        titleSelector : `.sc-1vbk2g0-0 h1`,
        descriptionSelector : `.xf6b4m-4 ul`,
        imageSelector : `.puv25r-2 img`,
        imageAttr : `src`
    },
    "sharafdg": {
        
        productURL : `https://uae.sharafdg.com/product/iphone-12-pro-256gb-silver/?promo=1239780`,
        priceSelector : `.quick-right > div.summary.entry-summary.info-block.clearfix > div.pdp--price-wrp > div > div.product-price > div.price.no-marign > span.total--sale-price`,
        titleSelector : `.quick-right > div.summary.entry-summary.info-block.clearfix > div.mainproduct-info > div > div.product-title > h1`,
        descriptionSelector : `#ccs-inline-content`,
        imageSelector : `.sdg-ratio img`,
        imageAttr : `src`
    },

}

const url = [
    `https://www.amazon.ae/Apple-iPhone-Pro-Facetime-International/dp/B08L5NRZNW/ref=sr_1_1?crid=14588A998DKMZ&dchild=1&keywords=iphone%2B12%2Bpro%2B256gb&qid=1610906632&sprefix=iphone%2B12%2Bpro%2B128%2Caps%2C283&sr=8-1&th=1`
,`https://www.amazon.ae/Apple-iPhone-Pro-Facetime-International/dp/B08L5NJG62/ref=sr_1_1?crid=14588A998DKMZ&dchild=1&keywords=iphone%2B12%2Bpro%2B256gb&qid=1610906632&sprefix=iphone%2B12%2Bpro%2B128%2Caps%2C283&sr=8-1&th=1`
,`https://www.amazon.ae/Apple-iPhone-Pro-Facetime-International/dp/B08L5Q2TJ7/ref=sr_1_1?crid=14588A998DKMZ&dchild=1&keywords=iphone%2B12%2Bpro%2B256gb&qid=1610906632&sprefix=iphone%2B12%2Bpro%2B128%2Caps%2C283&sr=8-1&th=1`

,`https://www.noon.com/uae-en/iphone-12-pro-with-facetime-128gb-pacific-blue-5g-international-specs/N41247216A/p?o=d697e1dcf653768f`
,`https://www.noon.com/uae-en/iphone-12-pro-with-facetime-256gb-pacific-blue-5g-international-specs/N41247235A/p?o=c97b8bfdc0114cba`
,`https://www.noon.com/uae-en/iphone-12-pro-with-facetime-512gb-pacific-blue-5g-international-specs/N41247246A/p?o=a3b303431314d9df`

,`https://uae.sharafdg.com/product/iphone-12-pro-512gb-silver/?promo=1480338`
,`https://uae.sharafdg.com/product/iphone-12-pro-256gb-gold/?promo=1266239`
,`https://uae.sharafdg.com/product/iphone-12-pro-128gb-graphite/`
]



export { constant, url };
