import { ShoppingCart } from './shopping-cart';


export class Order {
    key!: string;
    datePlaced: number = 0;
    items: any[] = [];
    orderPrice: number = 0;
    

    constructor(public userId: string, public shipping: any, private shoppingCart: ShoppingCart) {
      this.datePlaced = new Date().getTime();
      this.items = this.shoppingCart.items.map(i => {
          return {
            product: {
              title: i.title,
              imageUrl: i.imageUrl,
              price: i.price
            },
  
            quantity: i.quantity,
            totalPrice: i.totalPrice
          }
      })

      this.orderPrice = this.totalOrderPrice;
    }

    get totalOrderPrice(){
      let sum = 0;
      this.shoppingCart.items.forEach(i => {
        sum += i.totalPrice;
      })

      return sum;
    }
    
}