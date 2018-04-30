import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ConfigComponent } from './config.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ConfigComponent
  ],
})
export class ConfigModule { }
