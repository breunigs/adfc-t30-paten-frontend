import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { T30SozialeEinrichtungService } from '../t30-soziale-einrichtung.service';
import { StrassenlisteService } from '../strassenliste.service';
import { SozialeEinrichtungEditBaseComponent } from '../soziale-einrichtung-edit-base/soziale-einrichtung-edit-base.component';


@Component({
  selector: 'app-soziale-einrichtung-edit',
  templateUrl: './soziale-einrichtung-edit.component.html',
  styleUrls: ['./soziale-einrichtung-edit.component.css']
})

export class SozialeEinrichtungEditComponent  extends SozialeEinrichtungEditBaseComponent  {

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
