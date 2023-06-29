import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
