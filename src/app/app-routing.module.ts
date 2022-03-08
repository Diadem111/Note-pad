import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactChildComponent } from './contact-child/contact-child.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentComponent } from './student/student.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",redirectTo:"about",pathMatch:"full"},
  {path:"contact",
  component:ContactComponent,
  children:[{path:"taiwo",component:ContactChildComponent}]
},
  {path:"transfer",component:TransferComponent},
  {path:"student",component:StudentComponent},
  {path:"student/:id",component:MoreDetailsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
