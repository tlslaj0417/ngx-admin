import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConfigModule } from './config/config.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { ModalComponent } from './modal/modal.component';

const PAGES_COMPONENTS = [
  PagesComponent,ModalComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ConfigModule,

  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class PagesModule {
}
