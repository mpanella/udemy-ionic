import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Pagina3Page} from "../pagina3/pagina3"
/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes:any[] =[
    {
    nombre:"magneto",
    poder:"controla metales"
    },
    {
     nombre:"wolverine",
     poder:"regeneracion"
    },
    {
      nombre:"profesor x",
      poder:"poderes psiquicos"
    },
    {
      nombre:"gambito",
      poder:"carga de energia objetos"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante:any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page,{'mutante':mutante});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

}
