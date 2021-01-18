import axios from 'axios';
import cherrio from 'cheerio';
const ProductModel = require('./Models/ProductModel');


async function getHTML(productURL) {
    const { data: html } = await axios.get(productURL, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36'
        }
    })
        .catch(function (error) {
            console.log(error);
        })
    return html;
}

async function getProductData(html, priceSelector, titleSelector, descriptionSelector, imageSelector, imageAttr) {
    const $ = cherrio.load(html)
    console.log($(descriptionSelector).text().trim())
    var productData = {
        price: $(priceSelector).text(),
        productTitle: $(titleSelector).text().trim(),
        productDescription: $(descriptionSelector).text().trim(),
        productImage: $(imageSelector).attr(imageAttr)
    }
    return productData
    
}

export { getHTML, getProductData };
