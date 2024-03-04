import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MasterService } from '../../service/master.service';
import { colorentity } from '../../Entity/colorentity';

@Component({
  selector: 'app-autocomplate',
  templateUrl: './autocomplate.component.html',
  styleUrl: './autocomplate.component.css'
})
export class AutocomplateComponent implements OnInit {

    colorArray=['Red','Yellow','Green']
    // membuat Filteroption menggunakan string
    // filteroptions!:Observable<string[]>

    //membuat filterOption menggunakan colorentity
    filteroptions!:Observable<colorentity[]>

    formcontrol= new FormControl('');
    colorArrayList!:colorentity[]

    ngOnInit(): void {
      //membuat sebuah Observable (filteroptions)
      // this.filteroptions=this.formcontrol.valueChanges.pipe(
      //   startWith(''),map(value =>this._FILTER(value||''))
      // )
       this.filteroptions=this.formcontrol.valueChanges.pipe(
        startWith(''),map(value =>this._LISTFILTER(value||''))
      )

    }

    constructor  (private service:MasterService){
          this.colorArrayList=this.service.getColorList();
    }
    // mengembalikan sebuah array yang dihasilkan dari filter terhadap array colorArray
    // private _FILTER(value:string):string[]{
    //     const searchvalue = value.toLocaleLowerCase();
    //     return this.colorArray.filter(option=>option.toLocaleLowerCase().includes(searchvalue));
    // }

    private _LISTFILTER(value:string):colorentity[]{
      const searchvalue = value.toLocaleLowerCase();
      return this.colorArrayList.filter(option=>option.name.toLocaleLowerCase().includes(searchvalue));
  }
}
