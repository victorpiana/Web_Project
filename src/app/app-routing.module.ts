import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdoptionPlaceComponent } from './adoption-place/adoption-place.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RefugeListComponent } from './refuge-list/refuge-list.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'Home', component : HomeComponent},
  {path : 'About', component : AboutComponent},   
  {path : 'adoptionplace/espece/:espece', component : AdoptionPlaceComponent},
  {path : 'adoptionplace/refuge/:refugeName', component : AdoptionPlaceComponent},
  {path : 'adoptionplace/:id',component: AnimalDetailsComponent}, 
  {path : 'adoptionplace', component : AdoptionPlaceComponent},
  {path : 'refuges', component : RefugeListComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'ajouter', component: AddAnimalComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  {path : '**', component : NotFoundComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
