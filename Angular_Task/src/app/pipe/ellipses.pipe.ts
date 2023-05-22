import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse',
})
export class EllipsesPipe implements PipeTransform {
  transform(value: string): string {
    const sentences = value.split('. ');

    // Check each sentence for length and add ellipsis if needed
    for (let i = 0; i < sentences.length; i++) {
      if (sentences[i].length > 20) {
        sentences[i] = sentences[i].substr(0, 20) + '...';
      }
    }
    value = sentences.join('. ');

    return value;
  }
}
