import { Pipe, PipeTransform } from '@angular/core';

const LONG_TEXT = [
    'Laut Behördenangabe ist hier Tempo 30 eingerichtet. Bitte prüfe vor Ort, ob wirklich an allen ' +
       'angrenzenden Straßen mit Haupteingängen oder An- und Abreiseverkehr Tempo 30 gilt.',
    'In mindestens einer angrenzenden Straße mit Haupteingang oder An- und Abreiseverkehr fehlt Tempo-30.',
                       'Eine Forderungsmail wurde von einem Aktiven verschickt',
                       'Die Behörde hat bereits Tempo 30 angeordnet, nur das Schild steht noch nicht.',
                       'An allen angrenzenden Straßen mit Haupteingängen oder An- und Abreiseverkehr ist Tempo 30 eingerichtet.',
                       'Alle Tempo-30-Forderung(en) wurde von der Behörde abgelehnt.'];
@Pipe({
  name: 't30StatusLongText'
})
export class T30StatusLongTextPipe implements PipeTransform {

  transform(value: number): string {
    if ((value < 0) || (value > 5)) {
      return '?';
      console.error('Unknown Status', value);
    }
    return LONG_TEXT[value];
  }
}
