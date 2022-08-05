import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  navbarOpen: boolean = false;
  constructor() { }

  toggleNavbar(value: boolean) : boolean{
    return !value;
  }
}
