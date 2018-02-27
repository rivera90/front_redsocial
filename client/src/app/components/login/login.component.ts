import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.servicer';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit{
  public title:string;
  public user:User;
  public status:string;
  public identity;
  public token:string;

  constructor(
    private _route: Router,
    private _router: Router,
    private _userService: UserService
  ){
    this.title= 'Identificate';
    this.user = new User("","","","","","","ROLE_USER","","");
  }
  ngOnInit(){
    console.log('componente de login cargado...');
  }
  onSubmit(){
    //Logerar el usuario y conseguir sus datos
    this._userService.singup(this.user).subscribe(
      response =>{
        this.identity = response.user;

        if(!this.identity || !this.identity._id){
          this.status = 'error';
        }else{
          this.status = 'success';
          //Persistir datos del usuario
          //Se almacenan en la secion por medio de la propiedad localStorage y setItem
          //se acceden al elemento identiti que es el json string de el objeto user
          localStorage.setItem('identity',JSON.stringify(this.identity));
          //Conseguir el token
          this.getToken();
        }
      },
      error=>{
        var errormesage = <any>error;
        console.log(errormesage);
        if(errormesage != null){
          this.status = 'error';
        }

      }
    )
  }

  getToken(){
    //Logerar el usuario y conseguir sus datos
    this._userService.singup(this.user,'true').subscribe(
      response =>{
        this.token = response.tikenb;

        if(this.token.length <= 0){
          this.status = 'error';
        }else{
          this.status = 'success';
          //Persistir datos del usuario
          localStorage.setItem('token',this.token);
          //Conseguir los contadores o estadisticas del usuario
        }
      },
      error=>{
        var errormesage = <any>error;
        console.log(errormesage);
        if(errormesage != null){
          this.status = 'error';
        }

      }
    )
  }
}
