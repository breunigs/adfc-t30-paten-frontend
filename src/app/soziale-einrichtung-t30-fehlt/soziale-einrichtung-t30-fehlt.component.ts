import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soziale-einrichtung-t30-fehlt',
  templateUrl: './soziale-einrichtung-t30-fehlt.component.html',
  styleUrls: ['./soziale-einrichtung-t30-fehlt.component.css']
})
export class SozialeEinrichtungT30FehltComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log('x1', param);
    });
  }

}
