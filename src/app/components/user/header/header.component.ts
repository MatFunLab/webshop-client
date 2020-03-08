import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SendDataService } from 'src/app/services/sendData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  isShown:boolean = false;
  
  constructor(private sendDataService: SendDataService, 
              private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('id_token') !== null) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }    
  }

  ngDoCheck() {
    if(localStorage.getItem('id_token') !== null) {
      this.isShown = true;
    } else {
      this.isShown = false;
    }    
  }

  loginClick = () => {
    this.sendDataService.showSignupForm.next(false);
    this.sendDataService.showLoginForm.next(true);
      
  }

  signupClick = () => {
    this.sendDataService.showLoginForm.next(false);
    this.sendDataService.showSignupForm.next(true);
   
  }
 
  logoutClick() {
    localStorage.removeItem("id_token");
    this.isShown = false;
  }
  
}
