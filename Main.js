var readLine = require("readline-sync");
var ListProduct = require("./ListProduct");
var Carts = require("./Cart");

class Main{
    constructor(){
        this.listProduct = new ListProduct();
        this.carts = new Carts();
    }

    menu(){
        console.log("\n0.Enter fake data.");
        console.log("1.Enter a new product.");
        console.log("2.Export product list.");
        console.log("3.View cart.");
        console.log("4.Add a new product to the cart.");
        console.log("5.Remove the product from the cart.\n");
    }

    chooseMenu(){
        let i = readLine.question("Please select the function: ");
        return i;
    }

    run(){
        let continuee = "y";
        do{
            this.menu();
            let select = this.chooseMenu();
            switch(select){
                case "0": {
                    this.listProduct.createFakeData();
                    console.log("\nSuccess");
                    console.log("\n------------------------------");
                    break;
                }

                case "1": {
                    this.listProduct.inputList();
                    break;
                }

                case "2": {
                    this.listProduct.outputList();
                    break;
                }

                case "3": {
                    this.carts.outputCart();
                    console.log("\n");
                    break;
                }

                case "4": {
                    let id = readLine.question("Enter the product id you want to add to cart:");
                    this.carts.addToCart(this.listProduct, id);
                    console.log("\n");
                    break;
                }

                case "5": {
                    let id = readLine.question("Enter the product id you want to remove from the cart: ");
                    this.carts.removeFormCart(this.listProduct, id);
                    console.log("\n");
                    break;
                }

                default:
                    console.log("NOTICE: THIS FUNCTION DOESN'T EXISTING!");
            }
            continuee = readLine.question("Press y key to continue, press any key to exit!): \n");
        }while(continuee == "y");
    }
}

let main = new Main();
main.run();