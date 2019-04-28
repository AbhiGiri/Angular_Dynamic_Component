import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentInfoComponent,
    ParentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StudentInfoComponent, ParentInfoComponent]
})
export class AppModule { }
