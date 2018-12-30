import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { T30Pate } from '../t30pate';
import { T30Patenschaft } from '../t30patenschaft';
import { SozialeEinrichtung } from '../sozialeEinrichtung';


@Component({
  selector: 'app-t30paten',
  templateUrl: './t30paten.component.html',
  styleUrls: ['./t30paten.component.css']
})
export class T30patenComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
    einr1:SozialeEinrichtung = {
        id:42,
        lat:52.123,
        lon:9.456,
        name: 'Schule an der Musterstraße',
        zusatz: 'Standort Ne Andere Str',
        strasse: 'Andere Str. 12',
        plz: '21111',
        ort: 'Hamburg',
        art: '1',
        telefon: null,
        t50: true,
   }
    einr2:SozialeEinrichtung = {
        id:43,
        lat:52.123,
        lon:9.456,
        name: 'Schule an der Musterstraße',
        zusatz: 'Standort Musterstr',
        strasse: 'Musterstr 12',
        plz: '21110',
        ort: 'Hamburg',
        art: '1',
        telefon: null,
        t50: true,
   }
   pate1:T30Patenschaft = {
          id: 42,
          bezugZurEinrichtung: 'Stellvertr. Leitung',
       standDerDinge: 'am 17.12. angefragt',
       einrichtung: this.einr1
  };
   pate2:T30Patenschaft = {
          id: 43,
          bezugZurEinrichtung: 'Stellvertr. Leitung',
       standDerDinge: 'am 17.12. angefragt',
       einrichtung: this.einr2
  };
  t30pate: T30Pate = {
      id: 1,
      vorname: 'Willy',
      nachname: 'Wichtig',
      eMail: 'wichtig@example.com',
      passwort: 'geheim',
      strasse: null,
      plz: null,
      ort: null,
      telefon: null,
      speichern: true,
      patenschaften: [ this.pate1, this.pate2 ],
  };
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
        console.log('next step', this.step);  }

  prevStep() {
    this.step--;
  }

  lastStep() {
        let rtn=(this.t30pate.patenschaften.length+1);
        console.log('last step', rtn);
        return rtn;
  }

    deletePatenschaft(index) {
      this.t30pate.patenschaften.splice(index, 1);
    }
    addPatenschaft(index) {
        let p:T30Patenschaft = {
            id: -1,
            bezugZurEinrichtung: '',
            standDerDinge: '',
            einrichtung: {
                id:-1,
                lat:null,
                lon:null,
                name:null,
                zusatz: null,
                strasse: null,
                plz: null,
                ort: null,
                art: null,
                telefon: null,
                t50: true,
            }
        };

      this.t30pate.patenschaften.push(p);
      this.step++;
  }
  constructor() { }

  ngOnInit() {
  }

}
