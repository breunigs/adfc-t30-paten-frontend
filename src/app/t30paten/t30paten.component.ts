import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { OSM_TILE_LAYER_URL }   from '@yaga/leaflet-ng2';
import { T30Pate } from '../t30pate';
import { T30Patenschaft } from '../t30patenschaft';
import { SozialeEinrichtung } from '../sozialeEinrichtung';
import { Point } from 'leaflet';

import * as sozialeEinrichtungen from "../../assets/sozEinr.json";

@Component({
  selector: 'app-t30paten',
  templateUrl: './t30paten.component.html',
  styleUrls: ['./t30paten.component.css']
})
export class T30patenComponent implements OnInit {
    public tileLayerUrl: string = OSM_TILE_LAYER_URL;
     hamburgLat=53.551086;
    hamburgLon=9.993682;

    t30pate = this.fb.group({
        vorname: ['', Validators.required],
        nachname: ['', Validators.required],
        eMail: ['', [ Validators.required, Validators.email ] ],
        strasse: [''],
        plz: ['', Validators.maxLength(5) ],
        ort: [''],
        telefon: [''],
        speichern: [true, Validators.required],
        mailingliste: [false, Validators.required],
        newsletter: [false, Validators.required],
        patenschaften: this.fb.array([
            this.fb.group({
                id: [-1],
                bezugZurEinrichtung: ['', Validators.required],
                standDerDinge: [''],
                einrichtung: this.fb.group({
                    id:[-1],
                    lat: [this.hamburgLat, Validators.required],
                    lon: [this.hamburgLon, Validators.required],
                    mapLat:  [this.hamburgLat],
                    mapLon: [this.hamburgLon],
                    name: ['', Validators.required],
                    zusatz: [''],
                    strasse: ['', Validators.required],
                    t50strasse: ['', Validators.required],
                    plz: ['', Validators.required ],
                    ort: ['Hamburg', Validators.required],
                    art: ['1', Validators.required],
                    telefon: [''],
                    t50:  [true, Validators.requiredTrue],
                }),
            })
        ]),
    });

    public isLoading: boolean=false;
    public marker= {
        draggable: true,
        iconSize: new Point(25,41),
        iconAnchor: new Point(12, 41),
        popupAnchor: new Point(1, -34),
        tooltipAnchor: new Point(16, -28),
        shadowSize: new Point(41, 41)
    }


  step = 0;
    filteredUsers = [];

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
        return this.t30pate.controls.patenschaften as FormArray
    }
    lastStep() {

        let rtn=this.ps().length+1;
        return rtn;
    }
    deletePatenschaft(index) {
        this.ps().removeAt(index);
    }
    addPatenschaft(index) {
        let p= this.fb.group({
                id: [-1],
                bezugZurEinrichtung: ['', Validators.required],
                standDerDinge: [''],
                einrichtung: this.fb.group({
                    id:[-1],
                    lat: [this.hamburgLat, Validators.required],
                    lon: [this.hamburgLon, Validators.required],
                    mapLat:  [this.hamburgLat],
                    mapLon: [this.hamburgLon],
                    name: ['', Validators.required],
                    zusatz: [''],
                    strasse: ['', Validators.required],
                    t50strasse: ['', Validators.required],
                    plz: ['', Validators.required],
                    ort: ['Hamburg', Validators.required],
                    art: ['1', Validators.required],
                    telefon: [''],
                    t50:  [true],
                }),
            })

        this.ps().push(p);
      this.step++;
    }
    absenden() {
    }

    changeEinrichtungsName(nr, search) {
        console.log('changeEinrName',nr,search);
        let newUsers=[]
        this.isLoading=true;
        if (search.length>2) {
            let lowerSearch= search.toLowerCase();
            for (let entry of sozialeEinrichtungen['default']) {
                let idx=entry.Name.toLowerCase().indexOf(lowerSearch);
                if (idx != -1) {
                    (entry as any).idx=idx;
                    newUsers.push(entry);
                    if (newUsers.length > 40) {
                        break;
                    }
                }
            }
            this.filteredUsers=newUsers;
            this.isLoading=false;
        } else {
            this.filteredUsers=newUsers;
        }
    }
    displayEinrichtungsName(eintrag) {
        if (eintrag) {
            return eintrag;
        }
    }
    setAcEinrichtung(i,eintrag) {

        let e = eintrag.option.value;
        let einr = this.ps().at(i).get('einrichtung')
        einr.patchValue({
            name:e.Name,
            zusatz:'',
            strasse: e.Strasse+ ' ' + e.Nummer,
            t50strasse: e.Strasse,
            plz: e.PLZ,
            ort: 'Hamburg',
            id: e.id,
            art: String(e.art),
            lat: e.lat,
            lon: e.lon,
            mapLat: e.lat,
            mapLon: e.lon,

        });
    }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
