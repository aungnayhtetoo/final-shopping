import { Product } from './product';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
    // key!: string;
    items: ShoppingCartItem[] = [];

    constructor(public dateCreated: string, private itemsMap: { [key: string]: ShoppingCartItem }) { 
        this.itemsMap = itemsMap || {};
        for (let productId in itemsMap) {
            let item = itemsMap[productId];
            this.items.push(new ShoppingCartItem({ ...item, key: productId })
            );
        }     
    }

    get totalItemsCount() {
        let totalCount = 0;
        for(let productId in this.itemsMap) 
            totalCount += (this.itemsMap[productId] as ShoppingCartItem).quantity ;
        return totalCount;
    }

    getQuantity(product: Product) {
        // console.log(this.itemsMap);
        // console.log(product);
        
        
        let item = this.itemsMap[product.key]           
        return item ? item.quantity : 0;
    }

     
    get totalCartPrice() {
        let sum = 0;
        for(let productId in this.items) 
            sum += this.items[productId].totalPrice
        return sum;
    } 
}

    

   