import { Component, OnInit, Input } from '@angular/core';
import { SendDataService } from 'src/app/services/sendData.service';
import { Subscription } from 'rxjs';
import { LoginSignUpService } from 'src/app/services/http/login-signup.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  isLoginClicked: boolean = false;
  isSignUpClicked: boolean = false;
 
   unsubShowLogin: Subscription;
   unsubShowSignup: Subscription;

  constructor(private sendDataService: SendDataService,
              private httpService: LoginSignUpService,
              private router: Router) { }

  ngOnInit() {
   
  }

  /* getData() {
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

  removeForm (ev) {
    if(ev.target.id === "home-bg") {
      this.sendDataService.showSignupForm.next(false);
        this.sendDataService.showLoginForm.next(false);  
     
    } 
  } */
  /* onClickSubmit(formValue) {
    if(formValue.name) {
      this.httpService.postSignUp(formValue).subscribe((token: Token) => {
        console.log("Signup user is: ", token);
        localStorage.setItem('id_token', token.uniqueString);
        this.router.navigate(['/users', 'products']); 
      }, (err) => {
        console.log(err);
      });
    } else {
      this.httpService.postLogin(formValue).subscribe((token: Token) => {
        localStorage.setItem('id_token', token.uniqueString);
        this.router.navigate(['/users', 'products']); 
      }, (err) => {
        console.log(err);
      });
    }
  } */
  
  goToProducts() {
    this.router.navigate(['/users', 'products']);
  }
}
