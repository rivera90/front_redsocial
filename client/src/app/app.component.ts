import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.servicer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title:string;
   public identity;
  constructor(
    private _userService:UserService
  ){
    this.title = 'NGSoocial';
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
    console.log(this.identity);
  }

  ngDoCheck(){ //cada que hay un cambio a nivel de componentes sirve para modificar cualquier variable
    //Para esto se tiene que implementar en la clase implements OnInit, DoCheck
    //Gracias a esto el menu  cambia de manera dinamica al cambiarle el valor a identity
    this.identity = this._userService.getIdentity();
  }
}
