import { Component } from '@angular/core';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent {
  words: string[] = ['hello', 'bird', 'table', 'football', 'pipe', 'code'];
  titleCasedWords: string[] = [];

  convertToTitleCase() {
    this.words.forEach(word => {
      this.titleCasedWords.push(word.charAt(0).toUpperCase() +word.slice(1,10));
    });
  }
}
