import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent {
email : string = '';
password : string = '';
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    let data = {
      "email" : this.email,
      "mdp" : this.password
    }
    this.http.post('http://localhost:8089/phd/auth/login', data, { responseType: 'text' })
    .subscribe((response: any) => {
      try {
        const parsedResponse = JSON.parse(response);
console.log(parsedResponse);
console.log(response);
        if (parsedResponse.status === 'success') {
          const role = parsedResponse.role;
console.log(role);
          // Navigate based on role
          if (role === 'CANDIDAT') {
            this.router.navigate(['/candidate']);
          } else if (role === 'CED') {
            this.router.navigate(['/ced']);
          } else if (role === 'PROFESSEUR') {
            this.router.navigate(['/professeur']);
          } else {
            alert('Unrecognized role!');
          }
        } else {
          alert(parsedResponse.message || 'Login failed');
        }
      } catch (error) {
        alert('Unexpected response format');
      }
    }, error => {
      console.error('Login request failed', error);
      alert('Login request failed');
    });
}

}
