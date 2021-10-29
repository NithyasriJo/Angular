import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalComponent } from './additional/additional.component';
import { BuyComponent } from './buy/buy.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { LoanComponent } from './loan/loan.component';
import { RentComponent } from './rent/rent.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {
    path:"buy",
    component:BuyComponent,
  },
  {
    path:"rent",
    component: RentComponent,
  },
  {
    path:"pg",
    component:SearchComponent,
  },
  {
    path:"commercial",
    component:SearchComponent,
  },
  {
    path: "EMI",
    component: EmicalculatorComponent,
  },
  {
    path:"loan",
    component: LoanComponent,
  },
  {
    path:"",
    component: AdditionalComponent,
  },
 
  {
    path:"**",
    component: ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
