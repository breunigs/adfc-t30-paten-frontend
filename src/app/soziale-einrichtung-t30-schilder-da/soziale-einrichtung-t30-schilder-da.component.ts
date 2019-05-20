import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soziale-einrichtung-t30-schilder-da',
  templateUrl: './soziale-einrichtung-t30-schilder-da.component.html',
  styleUrls: ['./soziale-einrichtung-t30-schilder-da.component.css']
})
export class SozialeEinrichtungT30SchilderDaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log('x1', param);
    });
  }

}
