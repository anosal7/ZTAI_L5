import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials = {
    name: '',
    email: '',
    password: '',
  };



  constructor(public authService: AuthService,) {
  }


    ngOnInit() {
    }

    create() {

      return this.authService.createOrUpdate(this.credentials).subscribe((result) => {
        return result;
      });

    }
}
