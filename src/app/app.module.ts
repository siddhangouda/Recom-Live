import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import { EventmoduleModule } from './eventmodule/eventmodule.module';
import { GalleryModule } from './gallery/gallery.module'
import { EventsmoduleModule} from './eventsmodule/eventsmodule.module'
import { RegistrationModule } from './registration/registration.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AboutModule } from './about/about.module';
import { PastEventModuleModule } from './past-event-module/past-event-module.module';
import { SharedModule } from './shared/shared.module';
import {ScrollTopModule} from 'primeng/scrolltop';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HomeModule,
    EventmoduleModule,
    GalleryModule,
    EventsmoduleModule,
    RegistrationModule,
    FormsModule,
    HttpClientModule,
    AboutModule,
    // PastEventModuleModule,
    SharedModule,ScrollTopModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
