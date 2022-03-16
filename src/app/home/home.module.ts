import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { HomeComponent } from './home/home.component';
import { QuizService } from './quiz.service';
import { ModalComponent } from './modal/modal.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
    HeaderModule
  ],
  declarations: [HomePage, QuizListComponent, HomeComponent, ModalComponent],
  providers: [QuizService],
})
export class HomePageModule {}
