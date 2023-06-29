import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fileSizeValidator } from '../shared/validators/file-size.validator';
import { MyShoppingBagService } from '../shared/services/myShoppingBag.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit{

  productForm : any;
  url = 'https://www.shutterstock.com/image-vector/image-preview-icon-picture-placeholder-260nw-1716511726.jpg';
  qty : any = 1;
  id : any = 1;
  listData : any;
 

  constructor(private shoppingBagservice : MyShoppingBagService){}
  
  onSelectFile(eve : any){
    if(eve.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(eve.target.files[0]);
      reader.onload=(event : any)=>{
        this.url = event.target.result;
      }
    }
  }
 
  ngOnInit(): void {
    this.listData = [];

    this.productForm = new FormGroup({
      pImg : new FormControl('', Validators.required),
      pName : new FormControl('', Validators.required),
      pPrice : new FormControl('', Validators.required),
      pQty : new FormControl(''),
      pId : new FormControl(''),
      pOrderTotal : new FormControl('')
    })

  }
  
  addProduct(){
    this.listData.push(this.productForm.value);
    this.productForm.value.pImg = this.url; 
    this.productForm.value.pQty = this.qty;
    this.productForm.value.pId = this.id;
    this.url = '';
    this.id +=1;
    this.productForm.reset();
  }

  
  AddToBag(item : any){
    this.shoppingBagservice.productData.emit(item);
  }
  
  dec(item : any){
    item.pQty -= 1;
  }
  inc(item : any){
    item.pQty += 1;
  }
}
