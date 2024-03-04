import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  getColorList():colorentity[]{
      return[
          {code:'c1',name:'Red'},
          {code:'c2',name:'Yellow'},
          {code:'c3',name:'Green'}
      ]
  }
}
