import { Injectable } from '@angular/core';
import { AppStore } from './AppStore';
import { ObservableStore } from '@codewithdan/observable-store';

@Injectable({
  providedIn: 'root',
})
export class StoreService extends ObservableStore<AppStore> {
  constructor() {
    super({ trackStateHistory: true });
  }

  formatLogMessage(type: string | null) {
    if (!type) {
      return 'No type selected!';
    }
    return `${type} selected!`;
  }
}
