import { EventEmitter } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export class MyShoppingBagService{

    productList : any;
    
    
    constructor() { }
    
    productData = new EventEmitter();

    getOrderTotal(product : any){
        product.pOrderTotal = product.pQty * product.pPrice;
    }

}