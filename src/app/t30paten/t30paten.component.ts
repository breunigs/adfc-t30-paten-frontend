import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { T30sozialeEinrichtungComponent } from '../t30soziale-einrichtung/t30soziale-einrichtung.component';
import { Router } from '@angular/router';
import { T30PatenService } from '../t30-paten.service';
import { T30Pate } from '../t30pate';

@Component({
  selector: 'app-t30paten',
  templateUrl: './t30paten.component.html',
  styleUrls: ['./t30paten.component.css']
})
export class T30patenComponent implements OnInit {
  displayValidatorMarker = false;
  t30pate = this.fb.group({
    pate: this.fb.group({
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
    }),
    patenschaften: this.fb.array([
      this.fb.group({
        id: [-1],
        bezugZurEinrichtung: ['', Validators.required],
        standDerDinge: [''],
        einrichtung: T30sozialeEinrichtungComponent.buildItem(this.fb),
      })
    ]),
    emails: this.fb.array([
      this.fb.group({
        subject: ['', Validators.required],
        mailtext: ['', Validators.required]
      })
    ])
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
  emailsGroup() {
    return this.t30pate.controls.emails as FormArray;
  }
  lastStep() {
    const rtn = this.ps().length + 1;
    return rtn;
  }

  deletePatenschaft(index) {
    this.ps().removeAt(index);
    this.emailsGroup().removeAt(index);
  }

  addPatenschaft() {
    const p = this.fb.group({
      id: [-1],
      bezugZurEinrichtung: ['', Validators.required],
      standDerDinge: [''],
      einrichtung: T30sozialeEinrichtungComponent.buildItem(this.fb),
    });
    this.ps().push(p);
    const emailC = this.fb.group({
      subject: ['', Validators.required],
      mailtext: ['', Validators.required]
    });
    this.emailsGroup().push(emailC);
    this.step++;
  }

  constructor(private fb: FormBuilder, private router: Router, private service: T30PatenService) { }

  ngOnInit() {
    this.t30pate.valueChanges.subscribe(val => {
      const pate = val.pate;
      let index = 0;
      while ((index < val.patenschaften.length) && (index < val.emails.length)) {

        const einr = val.patenschaften[index].einrichtung;

        const newSubject = `Bitte um Prüfung von Tempo 30 vor der Einrichtung ${einr.name} ${einr.zusatz}`;
        if (newSubject !== val.emails[index].subject) {
          this.emailsGroup().at(index).get('subject').setValue(newSubject);
        }
        /* tslint:disable:max-line-length */
        const newEMailText = `Sehr geehrte Damen und Herren,
mein Name ist ${pate.vorname} ${pate.nachname} und mir ist aufgefallen, dass an der ${einr.name}, ${einr.zusatz} leider Tempo 50 ist.
Ich fordere Sie auf hier Tempo 30 einzuführen.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.

Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

Viele Grüße

${pate.vorname} ${pate.nachname}

--
Diese E-Mail wurde durch das T30-Tool des ADFC-Hamburg verschickt, mehr Infos dazu unter
https://hamburg.adfc.de/hast-nicht-gesehen-FIXME `;
        /* tslint:disable:max-line-length */
        if (newEMailText !== val.emails[index].mailtext) {
          this.emailsGroup().at(index).get('mailtext').setValue(newEMailText);
        }
        index++;
      }
    });
  }
  validateAllFormFields(control: AbstractControl) {
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      Object.keys(control.controls).forEach(field => {
        this.validateAllFormFields(control.get(field));
      });
    } else if (control instanceof FormArray) {
      let i = 0;
      while (i < control.length) {
        this.validateAllFormFields(control.at(i));
        i++;
      }
    } else {
      console.error('Unkown Control: ', control);
    }

  }

  onSubmit() {
    this.validateAllFormFields(this.t30pate);
    this.t30pate.get('patenschaften').markAsDirty();
    if (this.t30pate.valid) {
      this.service.submitFirstPate(new T30Pate(this.t30pate.value)).subscribe(results => {
        this.router.navigate(['token', false]);
      });
    } else {
      this.displayValidatorMarker = true;
    }
  }
}
