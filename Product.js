var readline = require("readline-sync");

class Product{
    constructor(id, name, price, count){
        this.id = id;   
        this.name = name;
        this.price = price;
        this.count = count;
    }

    input(){
        this.id = `SP${Date.now()}`;
        console.log(`ID: ${this.id}`);
        this.name = readline.question("Name product: ");
        this.price = readline.question("Price product: ");
        this.count = readline.question("Count product: ");
        console.log("\n------------------------------");
    }

    output(){
        console.log(`ID: ${this.id}`);
        console.log(`Name product: ${this.name}`);
        console.log(`Price product: ${this.price} dollars`);
        console.log(`Count: ${this.count}`);
    }
} 

// var product1 = new Product();
// product1.input();
// product1.output();

module.exports = Product;