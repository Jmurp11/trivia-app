import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  cleanText(text: string) {
    return text
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, `'`)
      .replace(/&amp;/g, '&')
      .replace(/&rsquo;/g, `'`);
  }
}
