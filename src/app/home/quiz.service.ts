import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Quiz {
  id: number;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  url: string;
  length: number;

  constructor(private http: HttpClient) {
    this.url = 'https://opentdb.com/api.php?amount=';
    this.length = 10;
  }

  getQuiz(category: number, difficulty: string) {
    return this.http.get(
      `${this.url}${this.length}&category=${category}&difficulty=${difficulty}`
    );
  }

  getAvailableQuizzes(): Quiz[] {
    return [
      { id: 9, value: 'General Knowledge' },
      { id: 10, value: 'Entertainment: Books' },
      { id: 11, value: 'Entertainment: Film' },
      { id: 12, value: 'Entertainment: Music' },
      { id: 14, value: 'Entertainment: Television' },
      { id: 15, value: 'Entertainment: Video Games' },
      { id: 16, value: 'Entertainment: Board Games' },
      { id: 17, value: 'Science & Nature' },
      { id: 18, value: 'Science: Computers' },
      { id: 19, value: 'Science: Mathematics' },
      { id: 20, value: 'Mythology' },
      { id: 21, value: 'Sports' },
      { id: 22, value: 'Geography' },
      { id: 23, value: 'History' },
      { id: 24, value: 'Politics' },
      { id: 26, value: 'Celebrities' },
      { id: 27, value: 'Animals' },
      { id: 28, value: 'Vehicles' },
      { id: 29, value: 'Entertainment: Comics' },
      { id: 31, value: 'Entertainment: Japanese Anime & Manga' },
      { id: 32, value: 'Entertainment: Cartoon & Animations' },
    ];
  }
}
