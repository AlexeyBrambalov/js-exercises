/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: toilet roll, pasta, eggs
*/

class ShoppingCart {
  // Add your code here

  constructor(){
    this.cart='Your shopping cart has 3 items: '
  }

  addItem(item){
    this.cart+=item + ", "
  }

  listItems(){
    console.log(this.cart.substring(0 , this.cart.length-2));
  }

}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("toilet roll");
myCart.addItem("pasta");
myCart.addItem("eggs");

myCart.listItems();
