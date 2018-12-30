import { T30Patenschaft } from './t30patenschaft';
export class T30Pate {
    id: number;
    vorname: string;
    nachname: string;
    eMail: string;
    passwort: string;
    strasse: string;
    plz: string;
    ort: string;
    telefon: string;
    patenschaften: Array<T30Patenschaft>;
    speichern: boolean;
    mailingliste: boolean;
    newsletter: boolean;
}
