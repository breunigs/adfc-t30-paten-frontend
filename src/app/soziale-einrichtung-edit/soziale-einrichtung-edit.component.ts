import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Point } from 'leaflet';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import { T30SozialeEinrichtungService } from '../t30-soziale-einrichtung.service';

const HAMBURG_LAT = 53.551086;
const HAMBURG_LON = 9.993682;

@Component({
  selector: 'app-soziale-einrichtung-edit',
  templateUrl: './soziale-einrichtung-edit.component.html',
  styleUrls: ['./soziale-einrichtung-edit.component.css']
})

export class SozialeEinrichtungEditComponent implements OnInit {


  public einrichtung: FormGroup = this.fb.group({
      id: [-1],
      lat: [HAMBURG_LAT, Validators.required],
      lon: [HAMBURG_LON, Validators.required],
      mapLat: [HAMBURG_LAT],
      mapLon: [HAMBURG_LON],
      newLat: [HAMBURG_LAT],
      newLon: [HAMBURG_LON],
      name: ['', Validators.required],
      zusatz: [''],
      strasse: ['', Validators.required],
      t50strassen: ['', Validators.required],
      plz: ['', Validators.required],
      ort: ['Hamburg', Validators.required],
      art: ['1', Validators.required],
      telefon: [''],
      t50: [true],
      bezugZurEinrichtung: ['', Validators.required],
      angrenzendeStrassen: this.fb.array( [
        this.createAngrStrassenFbGroup()
      ])
    });

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
  newLat = HAMBURG_LAT;
  newLon = HAMBURG_LON;

  constructor(
    private fb: FormBuilder,
    /*private router: Router,*/
    private route: ActivatedRoute,
    private sozService: T30SozialeEinrichtungService,
  ) { }

  createAngrStrassenFbGroup() {
    return this.fb.group({
        name: [''],
        von: [''],
        bis: [''],
        status: ['1'],
      });
  }
  getStrassenAbschnitte() {
    return this.einrichtung.get('angrenzendeStrassen') as FormArray;
  }
  addStrassenAbschnitt() {
    const fa = this.einrichtung.get('angrenzendeStrassen') as FormArray;
    fa.push(this.createAngrStrassenFbGroup());
  }
  deleteStrassenAbschnitt( index: number) {
    const fa = this.einrichtung.get('angrenzendeStrassen') as FormArray;
    fa.removeAt(index);
    console.log(index);
  }
  changeLatFB(value) {
    if (this.lat !== value) {
      this.lat = value;
      this.mapLat = value;
      this.newLat = value;
    }
  }
  changeLonFB(value) {
    if (this.lon !== value) {
      this.lon = value;
      this.mapLon = value;
      this.newLon = value;
    }
  }
  isMarkerMoved() {
    return ((this.lat !== this.newLat) || (this.lon !== this.newLon));
  }
  mapMoveEnd() {
    this.einrichtung.patchValue({
      newLat: this.newLat,
      newLon: this.newLon
    });
  }
  posReset() {
    this.newLat = this.lat;
    this.newLon = this.lon;
  }
  posAenderung() {
    this.einrichtung.patchValue({
      lat: this.newLat,
      lon: this.newLon
    });
  }
  mapDblClick(event) {
    if (event.latlng) {
      this.newLat = event.latlng.lat;
      this.newLon = event.latlng.lng;
      this.einrichtung.patchValue({
        newLat: this.newLat,
        newLon: this.newLon
      });
    }
  }
  ngOnInit() {
    this.einrichtung.get('lat').valueChanges.subscribe(x => this.changeLatFB(x));
    this.einrichtung.get('lon').valueChanges.subscribe(x => this.changeLonFB(x));
    this.route.params.subscribe(param => {
      console.log('x1', param);
      this.sozService.get(param.id).subscribe( data => {
        this.einrichtung.patchValue(data);
      });
    });

  }

}
