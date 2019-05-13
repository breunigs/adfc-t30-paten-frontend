import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-soz-einr-buttons',
  templateUrl: './soz-einr-buttons.component.html',
  styleUrls: ['./soz-einr-buttons.component.css']
})
export class SozEinrButtonsComponent implements OnInit {

  @Input() public id;
  @Input() public tempo30;
  constructor() { }

  ngOnInit() {
  }

}
