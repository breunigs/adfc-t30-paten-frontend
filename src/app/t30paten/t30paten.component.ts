import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
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
    public mapZoom: number = 12;
    public mapLon: number=10;
    public mapLat: number=52.2;
    public markerLon: number=10;
    public markerLat: number=52.2;
     hamburgLat=53.551086;
     hamburgLon=9.993682;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
    public isLoading: boolean=false;
    public marker= {
        draggable: true,
        iconSize: new Point(25,41),
        iconAnchor: new Point(12, 41),
        popupAnchor: new Point(1, -34),
        tooltipAnchor: new Point(16, -28),
        shadowSize: new Point(41, 41)
    }

  t30pate: T30Pate = {
      id: -1,
      vorname: null,
      nachname: null,
      eMail: null,
      passwort: null,
      strasse: null,
      plz: null,
      ort: null,
      telefon: null,
      speichern: true,
      mailingliste: false,
      newsletter: false,
      patenschaften: [ {
          id: -1,
          bezugZurEinrichtung: null,
          standDerDinge: null,
          einrichtung: {
              id:-1,
              lat: this.hamburgLat,
              lon: this.hamburgLon,
              mapLat: this.hamburgLat,
              mapLon: this.hamburgLon,
              name: null,
              zusatz: null,
              strasse: null,
              t50strasse: null,
              plz: null,
              ort: 'Hamburg',
              art: '1',
              telefon: null,
              t50: true,
          }
      }],
  };
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

  lastStep() {
        let rtn=(this.t30pate.patenschaften.length+1);
        return rtn;
  }
    deletePatenschaft(index) {
      this.t30pate.patenschaften.splice(index, 1);
    }
    addPatenschaft(index) {
        let p:T30Patenschaft = {
            id: -1,
            bezugZurEinrichtung: '',
            standDerDinge: '',
            einrichtung: {
                id:-1,
                lat: this.hamburgLat,
                lon: this.hamburgLon,
                mapLat: this.hamburgLat,
                mapLon: this.hamburgLon,
                name:null,
                zusatz: null,
                strasse: null,
                t50strasse: null,
                plz: null,
                ort: null,
                art: null,
                telefon: null,
                t50: true,
            }
        };

      this.t30pate.patenschaften.push(p);
      this.step++;
    }
    absenden() {
    }
    changeEinrichtungsName(nr, search) {
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
        this.t30pate.patenschaften[i].einrichtung.name= e.Name;
        this.t30pate.patenschaften[i].einrichtung.zusatz = "";
        this.t30pate.patenschaften[i].einrichtung.strasse= e.Strasse+ ' ' + e.Nummer;
        this.t30pate.patenschaften[i].einrichtung.t50strasse= e.Strasse;
        this.t30pate.patenschaften[i].einrichtung.plz=e.PLZ;
        this.t30pate.patenschaften[i].einrichtung.ort= "Hamburg";
        this.t30pate.patenschaften[i].einrichtung.art=String(e.art);
        this.t30pate.patenschaften[i].einrichtung.id=e.id;
        this.t30pate.patenschaften[i].einrichtung.lat=e.lat;
        this.t30pate.patenschaften[i].einrichtung.lon=e.lon;
        this.t30pate.patenschaften[i].einrichtung.mapLat=e.lat;
        this.t30pate.patenschaften[i].einrichtung.mapLon=e.lon;

    }
  constructor() { }

  ngOnInit() {
  }

}
