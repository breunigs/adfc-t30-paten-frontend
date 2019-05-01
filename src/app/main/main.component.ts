import { Component, OnInit } from '@angular/core';

import { T30PatenService } from '../t30-paten.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public displayedPatenColumns: string[] = [ 'name', 'strasse', 'plz', 'ort', 'status', 'aktion', ];
  public patenList = [];
  constructor(
    private patenService: T30PatenService,
  ) { }

  ngOnInit() {
    this.patenService.list().subscribe(
      data => {
        this.patenList = data;
      }
    );
  }


}
