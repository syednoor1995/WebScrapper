const ProductModel = require('../Models/ProductModel');
import { getHTML, getProductData } from '../scrape';
import { constant, url } from '../Constant/constant';

module.exports = {
  scrapePage: async (req, res) => {
    // console.log(req.body.url)

    var storage, data,web;
    for (const link of url) {
      if (link.includes('amazon')) {
        data = constant['amazon']
        web='amazon'

      }
      else if (link.includes('noon')) {
        data = constant['noon']
        web='noon'
      }
      else if (link.includes('sharafdg')) {
        data = constant['sharafdg']
        web='sharafdg'
      }

      const html = await getHTML(link);
      const productData =  await getProductData(html, data.priceSelector, data.titleSelector,
        data.descriptionSelector, data.imageSelector, data.imageAttr);
      if (productData.productTitle.includes('128GB')) {
        storage = 128;
      }
      else if (productData.productTitle.includes('256GB')) {
        storage = 256;
      }
      else if (productData.productTitle.includes('512GB')) {
        storage = 512;
      }
      var price = productData.price.replace(/^\D+|\D+$/g, "")
      price = parseFloat(price.replace(',', ''))
      ProductModel.create({
        web: web,
        webUrl: data.productURL,
        storage: storage,
        price: price,
        productTitle: productData.productTitle,
        productDescription: productData.productDescription,
        productImage: productData.productImage

      })
        .then(data => {
          console.log("added")
        })
        .catch(err => {
          console.log(err.message)


        })


    }
    res.json({ success: true })

  },

  getProductData: async (req, res) => {
    ProductModel.find({ storage: req.params.storage })
    .sort([['price', 'asc']])
    .exec()
    .then(data=>{
      res.json(data)
    })
    .catch(err=>{
      res.json(err.message)
    })
  }





}