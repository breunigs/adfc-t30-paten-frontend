import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-soziale-einrichtung-view',
  templateUrl: './soziale-einrichtung-view.component.html',
  styleUrls: ['./soziale-einrichtung-view.component.css']
})
export class SozialeEinrichtungViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log('x1', param);
    });
  }

}
