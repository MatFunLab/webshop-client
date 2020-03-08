import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendDataService } from './services/sendData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webshop-client';

  isLoginClicked: boolean = false;
  isSignUpClicked: boolean = false;
 
   unsubShowLogin: Subscription;
   unsubShowSignup: Subscription;

  constructor(private sendDataService: SendDataService,
                    ) { }

  ngOnInit() {
   
  }

  getData() {
   this.unsubShowLogin = this.sendDataService.showLoginForm.subscribe(isLogin => {
      this.isLoginClicked = isLogin;
    });
    this.unsubShowSignup = this.sendDataService.showSignupForm.subscribe(isSignup => {
      this.isSignUpClicked = isSignup;
    });
  }

  ngDoCheck() {
   this.getData();
   this.unsubShowLogin.unsubscribe();
   this.unsubShowSignup.unsubscribe();
  }

  ngOnDestroy() {
    this.unsubShowLogin.unsubscribe();
    this.unsubShowSignup.unsubscribe();
  }
  
}
