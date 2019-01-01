import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, NgForm, Validators } from '@angular/forms';
import { Point } from 'leaflet';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import * as sozialeEinrichtungen from '../../assets/sozEinr.json';


const HAMBURG_LAT = 53.551086;
const HAMBURG_LON = 9.993682;


@Component({
  selector: 'app-t30soziale-einrichtung',
  templateUrl: './t30soziale-einrichtung.component.html',
  styleUrls: ['./t30soziale-einrichtung.component.css']
})
export class T30sozialeEinrichtungComponent implements OnInit {

  @Input()
  public einrichtung: FormGroup;

  filteredUsers = [];

  public tileLayerUrl: string = OSM_TILE_LAYER_URL;
  public isLoading = false;
  public marker = {
    draggable: true,
    iconSize: new Point(25, 41),
    iconAnchor: new Point(12, 41),
    popupAnchor: new Point(1, -34),
    tooltipAnchor: new Point(16, -28),
    shadowSize: new Point(41, 41)
  };
  lat = HAMBURG_LAT;
  lon = HAMBURG_LON;
  mapLat = HAMBURG_LAT;
  mapLon = HAMBURG_LON;

  static buildItem(fb: FormBuilder) {
    return fb.group({
      id: [-1],
      lat: [HAMBURG_LAT, Validators.required],
      lon: [HAMBURG_LON, Validators.required],
      mapLat: [HAMBURG_LAT],
      mapLon: [HAMBURG_LON],
      name: ['', Validators.required],
      zusatz: [''],
      strasse: ['', Validators.required],
      t50strasse: ['', Validators.required],
      plz: ['', Validators.required],
      ort: ['Hamburg', Validators.required],
      art: ['1', Validators.required],
      telefon: [''],
      t50: [true],
    });
  }

  changeEinrichtungsName(nr, search) {
    this.isLoading = true;
    const newUsers = [];
    if (search.length > 2) {
      const lowerSearch = search.toLowerCase();
      for (const entry of sozialeEinrichtungen['default']) {
        const idx = entry.Name.toLowerCase().indexOf(lowerSearch);
        if (idx !== -1) {
          (entry as any).idx = idx;
          newUsers.push(entry);
          if (newUsers.length > 40) {
            break;
          }
        }
      }
      this.filteredUsers = newUsers;
      this.isLoading = false;
    } else {
      this.filteredUsers = newUsers;
    }
  }
  displayEinrichtungsName(eintrag) {
    if (eintrag) {
      return eintrag;
    }
  }
  setAcEinrichtung(i, eintrag) {

    const e = eintrag.option.value;
    this.einrichtung.patchValue({
      name: e.Name,
      zusatz: '',
      strasse: e.Strasse + ' ' + e.Nummer,
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

  constructor() { }

  changeLatFB(value) {
    if (this.lat !== value) {
      this.lat = value;
      this.mapLat = value;
    }
  }
  changeLonFB(value) {
    if (this.lon !== value) {
      this.lon = value;
      this.mapLon = value;
    }
  }

  mapMoveEnd() {
    this.einrichtung.patchValue({
      lat: this.lat,
      lon: this.lon
    });
  }
  mapDblClick(event) {
    if (event.latlng) {
      this.lat = event.latlng.lat;
      this.lon = event.latlng.lng;
      this.einrichtung.patchValue({
        lat: this.lat,
        lon: this.lon
      });
    }
  }
  ngOnInit() {
    this.einrichtung.get('lat').valueChanges.subscribe(x => this.changeLatFB(x));
    this.einrichtung.get('lon').valueChanges.subscribe(x => this.changeLonFB(x));
  }

}
