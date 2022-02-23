import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResultsComponent } from './results/results.component';
import { ResultRoutingModule } from './result-routing.module';



@NgModule({
  declarations: [ResultComponent, ResultsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
