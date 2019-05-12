import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import { Component, OnInit } from '@angular/core';
import { marker, Icon } from 'leaflet';
import { T30SozialeEinrichtungService } from '../t30-soziale-einrichtung.service';


const HAMBURG_LAT = 53.551086;
const HAMBURG_LON = 9.993682;

const CustomIcon = Icon.extend({
    options: {
      iconSize:     [25, 25],
      shadowSize:   [25, 25],
      iconAnchor:   [12, 12],
      shadowAnchor: [0, 0],
      popupAnchor:  [-1, -11]
    }
});

const FARBCODE = ['#0554fa', '#ef140d', '#f7ab05', '#e7ff08', '#44f917', '#000000' ];
const POPUP_TEXT = ['Bitte checken.<br>[t30da:Hier ist schon ausreichend Tempo 30] [t30antrag:Ich möchte hier Tempo 30 fordern] ' +
                           ' [t30fordern:Hier ist nicht ausreichend Tempo 30]',

                    'Handlungsbedarf.<br>[details:Details] [t30fordern:Ich möchte hier Tempo 30 fordern] [fehler:Fehler melden]',

                    'Forderung bereits gestellt.<br>[details:Details] [fehler:Fehler melden]',

                    'In Umsetzung.<br>[details:Details] [schilderDa:Die Tempo 30 Schilder sind aufgestellt] [fehler:Fehler melden]',

                    'OK.<br>[details:Details] [fehler:Fehler melden]',

                    'Abgelehnt.<br>[details:Details] [fehler:Fehler melden]'];
function createSvgIcon(idx) {
    // console.log(idx);
    const farbe = FARBCODE[idx];
    const starSvg = '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" class="star rating" data-rating="1">' +
        '<polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill:' +
        farbe + ';"/>' +
        '</svg>';

    const myUrl = 'data:image/svg+xml;base64,' + window.btoa(starSvg);

    return new (CustomIcon as any)({iconUrl: myUrl});

}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Component({
  selector: 'app-soziale-einrichtungs-karte',
  templateUrl: './soziale-einrichtungs-karte.component.html',
  styleUrls: ['./soziale-einrichtungs-karte.component.css']
})

export class SozialeEinrichtungsKarteComponent implements OnInit {
  mapLat = HAMBURG_LAT;
  mapLon = HAMBURG_LON;
  geoData =   {'features': [
                    ],
                    'type': 'FeatureCollection',
                    'name': 'KeinTempo30ohne',
                    'crs': {
                        'type': 'name',
                        'properties': {
                            'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'
                        }
                    },

                };
  public tileLayerUrl: string = OSM_TILE_LAYER_URL;
  constructor(
    private sozEinrService: T30SozialeEinrichtungService,
  ) { }

  ngOnInit() {
    this.sozEinrService.list().subscribe(
      data => {
        // console.log(data);
        const items = [];
        for (const item of data) {
            item.tempo30 = getRandomInt(0, 5);
              items.push({
                  'type': 'Feature',
                  'properties': item,
                  'geometry': {
                      'type': 'Point',
                      'coordinates': [ item.lon, item.lat ]
                    }
              });
        }
       this.geoData =  {
            'type': 'FeatureCollection',
            'name': 'KeinTempo30ohne',
            'crs': {
                'type': 'name',
                'properties': {
                    'name': 'urn:ogc:def:crs:OGC:1.3:CRS84'
                }
            },
            'features': items
        };
      }
    );
  }

  pointToLayerFunc(feature, latlng) {
    const m = marker(latlng, {
      'icon': createSvgIcon(feature.properties.tempo30),
    });
    let p = POPUP_TEXT[feature.properties.tempo30];
    p = p.replace(/\[([^:]*):([^\]]*)\]/g, '<button data-id="' + feature.properties.id +
     '" data-action="$1" class="adfc-map-button adfc-map-button-$1">$2</button>');
    m.bindPopup('<b>' + feature.properties.Name + '</b><br>' +
                    feature.properties.Strasse + ' ' + feature.properties.Nummer +
                     ', ' + feature.properties.PLZ + ' Hamburg<br>' +
                    '<b>Stand der Dinge:</b> ' + p
                  );
    return m;
  }

}
