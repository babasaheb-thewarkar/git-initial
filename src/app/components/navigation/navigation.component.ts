import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isChecked: any = false;
  faBarIcon = 'fa-bars'; 
  constructor() { }

  ngOnInit(): void {
  }

  onChange(newValue: boolean) {
    console.log(newValue);
    if(newValue){
      this.faBarIcon = 'fa-times';      
    }else{
      this.faBarIcon = 'fa-bars';
    }

  }

}
