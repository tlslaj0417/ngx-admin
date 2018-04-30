import {Injectable} from '@angular/core'
import { DynamicFlipCardComponent } from './fc-dynamic.component'
import { fcItem }               from './fc-item';
import { Observable } from 'rxjs/Observable';

  @Injectable()
  export class DynamicFlipCardService {
    datas: Array<fcItem> = [
      new fcItem(DynamicFlipCardComponent,{name:'OCNT', desc:'this is a project under the testing', instance:'12'}),
    new fcItem(DynamicFlipCardComponent,{name:'MS', desc:'this is a project under the pilot testing',instance:'3'}),
    new fcItem(DynamicFlipCardComponent,{name:'XML Loader', desc:'this is a project under the pilot testing',instance:'4'}),
    new fcItem(DynamicFlipCardComponent,{name:'AXIS', desc:'this is a project under the pilot testing',instance:'20'}),
    new fcItem(DynamicFlipCardComponent,{name:'GENIUS', desc:'this is a project under the pilot testing',instance:'5'})
  ];
    getCards(){
        return this.datas;
    }

    getInitCard(){
      return [
        new fcItem(DynamicFlipCardComponent,{name:'OCNT', desc:'this is a project under the testing', instance:'12'}),
        new fcItem(DynamicFlipCardComponent,{name:'MS', desc:'this is a project under the pilot testing',instance:'3'}),
        new fcItem(DynamicFlipCardComponent,{name:'XML Loader', desc:'this is a project under the pilot testing',instance:'4'}),
        new fcItem(DynamicFlipCardComponent,{name:'AXIS', desc:'this is a project under the pilot testing',instance:'20'}),
        new fcItem(DynamicFlipCardComponent,{name:'GENIUS', desc:'this is a project under the pilot testing',instance:'5'}),
      ];
    }

    public searchInput(input: String){
      const newDatas : Array<fcItem>=[];
      for(let i = 0; i < this.getCards().length; i++) {
        const fc = this.getCards()[i];
        if(fc.data.name.search(input) === -1 ){
            //not in
        }else{
          newDatas.push(fc);
        }
      }
      this.datas = newDatas;
      this.onDataSetChanged();
    }

    onDataSetChanged(): Observable<any>{
      return 
    }
  }