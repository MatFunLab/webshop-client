import { Component, OnInit } from '@angular/core';
import { SendDataService } from 'src/app/services/sendData.service';
import { LoginSignUpService } from 'src/app/services/http/login-signup.service';
import { Subscription } from 'rxjs';
import { Token } from 'src/app/models/token.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginClicked: boolean = false;
  isSignUpClicked: boolean = false;
 
   unsubShowLogin: Subscription;
   unsubShowSignup: Subscription;

  constructor(private sendDataService: SendDataService,
              private httpService: LoginSignUpService,
              private router: Router) { }

  ngOnInit() {
    this.getData();
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

  removeForm(ev) {
   if(ev.target.id === "signLoginForms") {
      this.sendDataService.showSignupForm.next(false);
        this.sendDataService.showLoginForm.next(false);  
     
    }  
  }

  onClickSubmit(formValue) {
    if(formValue.name) {
      this.httpService.postSignUp(formValue).subscribe((token: Token) => {
        console.log("Signup user is: ", token);
        localStorage.setItem('id_token', token.uniqueString);
        this.sendDataService.showSignupForm.next(false);
        this.sendDataService.showLoginForm.next(false); 
        this.router.navigate(['/users', 'products']); 
      }, (err) => {
        console.log(err);
      });
    } else {
      this.httpService.postLogin(formValue).subscribe((token: Token) => {
        localStorage.setItem('id_token', token.uniqueString);
        this.sendDataService.showSignupForm.next(false);
        this.sendDataService.showLoginForm.next(false); 
        this.router.navigate(['/users', 'products']); 
      }, (err) => {
        console.log(err);
      });
    }
  }

}
