import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ButtonComponent } from './button/button.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { TransferComponent } from './transfer/transfer.component';
import { ContactChildComponent } from './contact-child/contact-child.component';
import { StudentComponent } from './student/student.component';
import { MoreDetailsComponent } from './more-details/more-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ButtonComponent,
    AddStudentComponent,
    StudentListComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactComponent,
    TransferComponent,
    ContactChildComponent,
    StudentComponent,
    MoreDetailsComponent
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
