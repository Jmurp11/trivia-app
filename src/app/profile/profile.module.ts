import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ProfileComponent } from './profile.component';
import { HeaderModule } from '../header/header.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from '../home/quiz.service';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule,
    HeaderModule,
    HttpClientModule
  ],
  declarations: [ProfilePage, ProfileComponent, UserInfoComponent, UserDataComponent],
  providers: [QuizService]
})
export class ProfileModule {}
