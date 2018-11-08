import { Component} from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ArticuloService } from '../../services/articulo.services';
import { DetailtPage } from '../detailt/detailt';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  articulos = [];

  constructor(private toast: ToastController, private afAuth: AngularFireAuth, public navCtrl: NavController, public articuloService : ArticuloService ) {
    //this.articulos = articuloService.getArticulos();
    this.articuloService.getArticulos().subscribe(articulos=> {
        this.articulos=articulos;
    });

  }
  ionViewWillload(){
    this.afAuth.authState.subscribe(data => {
      if (data.email){
      this.toast.create({
        message: 'WElcome to app_name, $[data.email]',
        duration: 3000
      }).present();
    }
    else{
      this.toast.create({
        message: 'Coul not finf authenticatin delails',
        duration: 3000
      }).present();
    }
    });
  }

  public goToDetail(ref){
    this.navCtrl.push(DetailtPage, {ref:ref});
  }

  public createArticulo(){
      this.navCtrl.push(DetailtPage, {ref:0});
  }

}
