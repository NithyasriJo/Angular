import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { SearchComponent } from './search/search.component';
import { AdditionalComponent } from './additional/additional.component';
import { CardComponent } from './card/card.component';
import { BuyComponent } from './buy/buy.component';
import { FooterComponent } from './footer/footer.component';
import { RentComponent } from './rent/rent.component';
import { ErrorComponent } from './error/error.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    SearchComponent,
    AdditionalComponent,
    CardComponent,
    BuyComponent,
    FooterComponent,
    RentComponent,
    ErrorComponent,
    EmicalculatorComponent,
    TwowaybindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
