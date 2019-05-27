import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { T30SozialeEinrichtungService } from '../t30-soziale-einrichtung.service';
import { StrassenlisteService } from '../strassenliste.service';
import { SozialeEinrichtungEditBaseComponent } from '../soziale-einrichtung-edit-base/soziale-einrichtung-edit-base.component';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-soziale-einrichtung-t30-fordern',
  templateUrl: './soziale-einrichtung-t30-fordern.component.html',
  styleUrls: ['./soziale-einrichtung-t30-fordern.component.css']
})
export class SozialeEinrichtungT30FordernComponent extends SozialeEinrichtungEditBaseComponent implements OnInit {

    public patenschaft: FormGroup = this.fb.group({
      id: [-1],
      standDerDinge: [''],
      mailtext: ['', Validators.required],
      subject: ['', Validators.required],
    });

    constructor(
      private authenticationService: AuthenticationService,
      fb: FormBuilder,
      router: Router,
      route: ActivatedRoute,
      sozService: T30SozialeEinrichtungService,
      strassenlisteService: StrassenlisteService,
    ) {

      super(fb,
        router,
        route,
        sozService,
      strassenlisteService);
    }
    getFirstName() {
      return this.authenticationService.getCurrentUser().firstName;
    }

    getLastName() {
      return this.authenticationService.getCurrentUser().lastName;
    }
    getEMail() {
      return this.authenticationService.getCurrentUser().eMail;
    }
    ngOnInit() {
      super.ngOnInit();
      console.log('a');
      // FIXME lade von Backend bereits formulierte E-Mail, wenn nicht mache das Folgende:
      this.einrichtung.valueChanges.subscribe(val => {
        const newSubject = `Bitte um Prüfung von Tempo 30 vor der Einrichtung ${val.name} ${val.zusatz}`;
        if ((!this.patenschaft.get('subject').dirty) && (newSubject !== this.patenschaft.get('subject').value)) {
            this.patenschaft.get('subject').setValue(newSubject);
        }
        const pate = this.authenticationService.getCurrentUser();
        /* tslint:disable:max-line-length */
        const newEMailText = `Sehr geehrte Damen und Herren,
  mein Name ist ${pate.firstName} ${pate.lastName} und mir ist aufgefallen, dass an der ${val.name}, ${val.zusatz} leider Tempo 50 ist.
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

  ${pate.firstName} ${pate.lastName}

  --
  Diese E-Mail wurde durch das T30-Tool des ADFC-Hamburg verschickt, mehr Infos dazu unter
  https://hamburg.adfc.de/hast-nicht-gesehen-FIXME `;
        /* tslint:disable:max-line-length */
        if ((!this.patenschaft.get('mailtext').dirty) && (newEMailText !== this.patenschaft.get('mailtext').value)) {
            this.patenschaft.get('mailtext').setValue(newEMailText);
        }

      });
    }
}
