import { Component } from '@angular/core';
import { MyShoppingBagService } from '../shared/services/myShoppingBag.service';


@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent {
  currentItem: any = [];
  orderTotal: number = 0;
  grandTotal: number = 0;
  constructor(private shoppingBagservice: MyShoppingBagService) { }


  ngOnInit(): void {

    this.shoppingBagservice.productData.subscribe((param: any) => {
      console.log("subscribed data", param);
      this.shoppingBagservice.getOrderTotal(param);
      this.currentItem.push(param);
      this.grandTotal = 0;
      this.currentItem.map((product : any)=>{
        this.grandTotal += product.pPrice*product.pQty;
      })
    })
  }
}
