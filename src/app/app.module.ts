import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NotesComponent } from './financial-notes/notes.component';
import { MonthlyPaymentsComponent } from './monthly-payments/monthly-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NotesComponent,
    MonthlyPaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
