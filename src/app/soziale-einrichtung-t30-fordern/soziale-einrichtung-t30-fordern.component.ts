import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soziale-einrichtung-t30-fordern',
  templateUrl: './soziale-einrichtung-t30-fordern.component.html',
  styleUrls: ['./soziale-einrichtung-t30-fordern.component.css']
})
export class SozialeEinrichtungT30FordernComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log('x1', param);
    });
  }
}
