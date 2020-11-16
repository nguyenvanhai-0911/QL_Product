var ListProduct = require("./ListProduct");

class Cart{
    constructor(){
        this.listCart = [];
    }   

    outputCart(){
        if (this.listCart.length === 0) {
            console.log("Your cart is empty!!!");
            return;
        }
        for(let pro of this.listCart){
            console.log(`ID:${pro.id}`);
            console.log(`Name Product: ${pro.name}`);
            console.log(`Price Product: ${pro.price}`);
            console.log("\n------------------------------");
        }
    }
   
    addToCart(proList, idPro){
        if(proList.searchProductById(idPro) === null){
            console.log("The product does not exist in the store!");
            return;
        }

        let pro = proList.searchProductById(idPro);
        if(!proList.checkCountProduct(pro)){
            console.log("The product is temporarily out of stock, please come back later!");
            return;
        }
        this.listCart.push(pro);
        pro.count--;
    }

    searchProductById(id){
        for(let pro of this.listCart){
            if(id === pro.id){
                return pro;
            }
        }
        return null;
    }

    removeFormCart(proList, idPro){
        let proInCart = this.searchProductById(idPro);
        if(proInCart === null){
            console.log("The product does not exist in the store!");
            return;
        }

        let proInProductList = proList.searchProductById(idPro);
        proInProductList.count++;
        this.listCart= this.listCart.filter(function (pro){
            return pro.id !== idPro;
        });
    }
}


module.exports = Cart;