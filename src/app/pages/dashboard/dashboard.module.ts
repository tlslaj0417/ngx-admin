import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { DynamicFlipCardService }         from '../util/fc-dynamic.service';
import { DynamicFlipCardComponent }         from '../util/fc-dynamic.component';
import { fcDirective }          from '../util/fc-dynamic.directive';


@NgModule({
  imports: [
    ThemeModule,
  ],
  providers: [DynamicFlipCardService],
  declarations: [
    DashboardComponent,fcDirective,DynamicFlipCardComponent
  ],
  entryComponents: [DynamicFlipCardComponent],
})
export class DashboardModule { }
