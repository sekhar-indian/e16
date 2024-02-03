const db=require('../util/databace');
const Cart = require('./cart');


module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute('INSERT INTO databace1.prodects(title,imageUrl,description,price) VALUES(?,?,?,?)',
    [this.title,this.imageUrl,this.description,this.price])
 
  }

  static deleteById(id) {
   
  }

  static fetchAll() {
   return db.execute('SELECT * FROM databace1.prodects');
  }

  static findById(id) {
  return db.execute('SELECT * FROM databace1.prodects WHERE id= ?',[id]);
}
}
