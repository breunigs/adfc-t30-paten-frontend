import { Component, OnInit } from '@angular/core';
import {Map, LatLng, control } from 'leaflet';
import osmLayer from './layer/osm-layer';
import sozEinrLayer from './layer/soz-einrichtung';

@Component({
  selector: 'app-soziale-einrichtungs-karte',
  templateUrl: './soziale-einrichtungs-karte.component.html',
  styleUrls: ['./soziale-einrichtungs-karte.component.css']
})
export class SozialeEinrichtungsKarteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new Map('map');

    // start the map Hamburg
    map.setView(new LatLng(53.55, 9.98), 9);
    map.addLayer(osmLayer);

      map.addLayer(sozEinrLayer);
      const baseMaps = {
          'OpenStreetMap': osmLayer,
      };

      const overlayMaps = {
          'Soziale Einrichtungen': sozEinrLayer,
      };

      control.layers(baseMaps, overlayMaps).addTo(map);

  }

}
