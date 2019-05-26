import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { T30SozialeEinrichtungService } from '../t30-soziale-einrichtung.service';
import { StrassenlisteService } from '../strassenliste.service';
import { SozialeEinrichtungEditBaseComponent } from '../soziale-einrichtung-edit-base/soziale-einrichtung-edit-base.component';


@Component({
  selector: 'app-soziale-einrichtung-t30-fehlt',
  templateUrl: './soziale-einrichtung-t30-fehlt.component.html',
  styleUrls: ['./soziale-einrichtung-t30-fehlt.component.css']
})
export class SozialeEinrichtungT30FehltComponent extends SozialeEinrichtungEditBaseComponent {

  constructor(
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

}
