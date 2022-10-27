import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicechannelsComponent } from './components/pages/servicechannels/servicechannels.component';
import { OurstoresComponent } from './components/pages/ourstores/ourstores.component';
import { CityplansComponent } from './components/pages/cityplans/cityplans.component';
import { SempreFormsComponent } from './components/sempre-forms/sempre-forms.component';
import { DigitalservicesComponent } from './components/pages/digitalservices/digitalservices.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicechannelsComponent,
    OurstoresComponent,
    CityplansComponent,
    SempreFormsComponent,
    DigitalservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
