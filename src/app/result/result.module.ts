import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResultsComponent } from './results/results.component';
import { ResultRoutingModule } from './result-routing.module';
import { ResultDetailComponent } from './result-detail/result-detail.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [ResultComponent, ResultsComponent, ResultDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
