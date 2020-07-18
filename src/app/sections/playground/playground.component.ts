import { Component, OnInit } from '@angular/core';
import { EventdisplayService } from '../../services/eventdisplay.service';
import { Configuration } from '../../services/extras/configuration.model';
import { PresetView } from '../../services/extras/preset-view.model';
import { HttpClient } from '@angular/common/http';
import { loadJSRootScripts } from '../../services/extras/jsroot-loader';

declare const JSROOT: any;

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {


  constructor(protected eventDisplay: EventdisplayService, protected http: HttpClient) {
  }

  ngOnInit() {
    const configuration = new Configuration();
    configuration.presetViews = [
      new PresetView('Left View', [0, 0, -12000], 'left-cube'),
      new PresetView('Center View', [-500, 12000, 0], 'top-cube'),
      new PresetView('Right View', [0, 0, 12000], 'right-cube')
    ];

    this.eventDisplay.init(configuration);
    loadJSRootScripts(() => {
      const geom_file = 'https://root.cern/js/files/geom/evegeoshape.json.gz';
      JSROOT.NewHttpRequest(geom_file, 'object', (obj) => {
        this.eventDisplay.loadJSONGeometry(JSROOT.GEO.build(obj).toJSON(), 'Eve Geo Shape');
      }).send();
    });
  }
}
