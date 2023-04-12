import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Observable,of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent    {


constructor(private router: Router) {}





async onLogout(){

try{
this.router.navigate(['/login']);
}

catch(error){console.log(error);}


}







}
