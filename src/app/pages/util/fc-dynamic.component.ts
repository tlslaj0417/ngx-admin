import { Component, Input } from '@angular/core';
import { FcComponent }       from './fc.compnent';

@Component({
  styleUrls: ['./fc-general.component.scss'],
  template: `
    
      <nb-flip-card id="card-item">
          <nb-card-front>
              <nb-card><nb-card-header>{{data.name}} </nb-card-header>
              <nb-card-body>{{data.desc}}</nb-card-body>
              <nb-card-footer><div id="content-gravity">{{data.instance}} instances is running</div></nb-card-footer></nb-card>
          </nb-card-front>
          <nb-card-back>
              <nb-card><nb-card-header>{{data.name}}</nb-card-header>
              <nb-card-footer><p><br /> <br /> </p><div id="content-gravity">View More Details</div></nb-card-footer></nb-card>
          </nb-card-back>
      </nb-flip-card>
     
  `
})
export class DynamicFlipCardComponent implements FcComponent {
  @Input() data: any;

}