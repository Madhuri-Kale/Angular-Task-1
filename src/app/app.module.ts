import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';
import { MyShoppingBagService } from './shared/services/myShoppingBag.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    ShoppingBagComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MyShoppingBagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
