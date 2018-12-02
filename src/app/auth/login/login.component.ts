import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'ofr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['']
  });

  constructor(private fb: FormBuilder, private apollo: Apollo, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value.email)
      .subscribe((user) => {
        console.log(user.name);
        this.router.navigate(['/editor']);
      });
  }
}
