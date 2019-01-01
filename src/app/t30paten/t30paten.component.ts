import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { T30Pate } from '../t30pate';
import { T30Patenschaft } from '../t30patenschaft';
import { SozialeEinrichtung } from '../sozialeEinrichtung';
import { T30sozialeEinrichtungComponent } from '../t30soziale-einrichtung/t30soziale-einrichtung.component';

@Component({
  selector: 'app-t30paten',
  templateUrl: './t30paten.component.html',
  styleUrls: ['./t30paten.component.css']
})
export class T30patenComponent implements OnInit {

  t30pate = this.fb.group({
    vorname: ['', Validators.required],
    nachname: ['', Validators.required],
    eMail: ['', [Validators.required, Validators.email]],
    strasse: [''],
    plz: ['', Validators.maxLength(5)],
    ort: [''],
    telefon: [''],
    speichern: [true, Validators.required],
    mailingliste: [false, Validators.required],
    newsletter: [false, Validators.required],
    patenschaften: this.fb.array([
      this.fb.group({
        id: [-1],
        bezugZurEinrichtung: ['', Validators.required],
        standDerDinge: [''],
        einrichtung: T30sozialeEinrichtungComponent.buildItem(this.fb),
      })
    ]),
  });
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ps() {
    return this.t30pate.controls.patenschaften as FormArray;
  }
  lastStep() {

    const rtn = this.ps().length + 1;
    return rtn;
  }
  deletePatenschaft(index) {
    this.ps().removeAt(index);
  }
  addPatenschaft(index) {
    const p = this.fb.group({
      id: [-1],
      bezugZurEinrichtung: ['', Validators.required],
      standDerDinge: [''],
      einrichtung: T30sozialeEinrichtungComponent.buildItem(this.fb),
    });

    this.ps().push(p);
    this.step++;
  }
  absenden() {
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
