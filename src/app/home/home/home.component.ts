import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Quiz, QuizService } from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string;
  quizList: Quiz[];
  modalOpen: boolean;
  constructor(
    private quizService: QuizService,
    public routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {
    this.title = 'Trivia App';
  }

  ngOnInit() {
    this.modalOpen = false;
    this.quizList = this.quizService.getAvailableQuizzes();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        list: this.quizList,
      },
    });
    return await modal.present();
  }
}
