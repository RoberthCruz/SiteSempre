import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityplansComponent } from './components/pages/cityplans/cityplans.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { DigitalservicesComponent } from './components/pages/digitalservices/digitalservices.component';
import { OurstoresComponent } from './components/pages/ourstores/ourstores.component';
import { ServicechannelsComponent } from './components/pages/servicechannels/servicechannels.component';

const routes: Routes = [
  { path: '', component: CityplansComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'ourstores', component: OurstoresComponent},
  { path: 'servicechannels', component: ServicechannelsComponent},
  { path: 'digitalservices', component: DigitalservicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
