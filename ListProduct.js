var Product = require("./Product");

class ListProduct{
    constructor(){
        this.list= [];
    }

    createFakeData(){
        if (this.list.length > 0){
            return;
        }
        for(let i=0; i<10; i++){
            let a = new Product(`SP${i}`, `Product display.`, Math.round(Math.random() * 100000 + 10000), 50);
            this.list.push(a);
        }
    }

    inputList(){
        let pro = new Product();
        pro.input();
        if(!Number(pro.price) || !Number(pro.count)){
            console.log("Something is not right, please re-enter!!!");
            return;
        }
        this.list.push(pro);
        console.log("More success!!!\n");
    }

    outputList(){
        if(this.list.length === 0){
            console.log("Empty list !!!");
            return;
        }
        for(let pro of this.list){
            pro.output();
            console.log("\n------------------------------");
        }
        console.log("Displayed successfully!!!");
    }

    filterProductById(id){
        let filterPro = this.list.filter(function (pro) {
            return pro.id === id;
          });
          return filterPro;
    }

    removeProductById(id) {
        this.list = this.list.filter(function (pro) {
            return pro.id !== id;
          });
      }

      searchProductById(id){
        for (let pro of this.list) {
          if (id === pro.id) {
            return pro;
          }
        }
        return null;
      }

    checkCountProduct(pro){
        if (pro.count > 0) 
            return true;
        return false;
    }
}

// var list1 = new ListProduct();
// list1.createFakeData();
// list1.inputList();
// list1.outputList();
// list1.filterProductById();
// list1.removeProductById();
// list1.searchProduct();
// list1.checkCountProduct(iphone);

module.exports = ListProduct;