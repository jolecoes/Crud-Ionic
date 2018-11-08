import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ArticuloService{

  /*articulos = [
    {ref:1, nomp:'Lavadora', precio:800000, descrip:'Marca Samsung'},
    {ref:2, nomp:'Plancha', precio:120000, descrip:'Marca Samurai'},
    {ref:3, nomp:'Licuadora', precio:350000, descrip:'Marca Oster'},
  ];*/

  articulos = [];

  constructor(public afDB: AngularFireDatabase) {

  }

  public getArticulos(){
    return this.afDB.list('articulos/').valueChanges();
    //return this.articulos;
  }

  public getArticulo(ref){
    return this.afDB.object('articulos/'+ref).valueChanges();
    //return this.articulos.filter( function(e, i){ return e.ref == ref } ) [0] || { ref:null, nomp:null, precio:null, descrip:null };
  }

  public createArticulo(articulo){
    this.afDB.database.ref('articulos/'+articulo.ref).set(articulo);
    //this.articulos.push(articulo);
  }

  public editArticulo(articulo){
    this.afDB.database.ref('articulos/'+articulo.ref).set(articulo);
    /*for(let i=0; i < this.articulos.length; i++){
      if(this.articulos[i].ref == articulo.ref){
        this.articulos[i] = articulo;
      }
    }*/
  }

  public deleteArticulo(articulo){
    this.afDB.database.ref('articulos/'+articulo.ref).remove();
    /*for(let i=0; i < this.articulos.length; i++){
      if(this.articulos[i].ref == articulo.ref){
        this.articulos.splice(i, 1);
      }
    }*/
  }

}
