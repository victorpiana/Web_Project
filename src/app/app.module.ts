import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturesContainerComponent } from './features-container/features-container.component';
import { CookieComponent } from './cookie/cookie.component';
import { AdoptionPlaceComponent } from './adoption-place/adoption-place.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { AnimalService } from './animal.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RefugeListComponent } from './refuge-list/refuge-list.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FeaturesContainerComponent,
    CookieComponent,
    AdoptionPlaceComponent,
    NotFoundComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    RefugeListComponent,
    AddAnimalComponent,
    DashboardComponent,
    AnimalDetailsComponent,
    AnimalCardComponent,
    TimeLineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
