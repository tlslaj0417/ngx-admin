import { Component, OnInit,OnDestroy,Input, ViewChild, ComponentFactoryResolver,NgZone } from '@angular/core';
import { DynamicFlipCardService }         from '../util/fc-dynamic.service';
import { fcItem }            from '../util/fc-item';
import { fcDirective } from '../util/fc-dynamic.directive';
import { FcComponent } from '../util/fc.compnent';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  fcs: fcItem[];
  @ViewChild(fcDirective) fcHost: fcDirective;

  constructor(private fcService: DynamicFlipCardService,
    private componentFactoryResolver: ComponentFactoryResolver,private _zone : NgZone) {}

  ngOnInit() {
    this.fcs = this.fcService.getCards();
    this.fcService.onDataSetChanged().subscribe(
      any =>{
        this.reloadComponent();
      }
    );
  }
  ngAfterViewInit() {
    this._zone.run(() => {
      this.loadComponent();
    });
  }

  ngOnDestroy() {

  }

  loadComponent(){

    for (let i = 0; i < this.fcs.length; i++) {
      const fc = this.fcs[i];
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(fc.component);
      let viewContainerRef = this.fcHost.viewContainerRef;
  
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<FcComponent>componentRef.instance).data = fc.data;
    }
  }

  reloadComponent(){
    this.fcs = this.fcService.getCards();
    this.loadComponent();
  }
}
