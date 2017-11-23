import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
    .then((res) => {
      this.flashMessagesService.show('You are Logged In', {
        cssClass: 'alert-success', timeout: 10000
      });
      this.router.navigate(['/']);
    })
    .catch((err) => {
      this.flashMessagesService.show(err.message, {
        cssClass: 'alert-danger', timeout: 4000
      });
      this.router.navigate(['/login']);
    })
  }


}
