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
    speichern: boolean;
    mailingliste: boolean;
    newsletter: boolean;
    public constructor(init?: Partial<T30Pate>) {
        Object.assign(this, init);
    }
}
