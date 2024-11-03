import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Route, Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  constructor(private http : HttpClient, private router : Router, private auth : AuthService) { }

  ngOnInit(): void {
  }

  login() {
    let data = {
        "email": this.email,
        "mdp": this.password
    }
<<<<<<< HEAD
    this.http.post('http://localhost:8089/phd/auth/users/login', data, { responseType: 'json' }).subscribe((response: any) => {
        if (response.status === 'success') {
            const role = response.role;
            // Redirection basée sur le rôle
            if (role === 'CANDIDAT') {
                this.router.navigate(['/users/candidate']);
            } else if (role === 'CED') {
                this.router.navigate(['/users/ced']);
            } else if (role === 'PROFESSEUR') {
                this.router.navigate(['/users/professeur']);
            } else {
                alert('Unrecognized role!');
            }
=======
    this.http.post('http://localhost:8089/phd/auth/login', data, { responseType: 'text' })
    .subscribe((response: any) => {
      try {
        const parsedResponse = JSON.parse(response);
console.log(parsedResponse);
console.log(response);
        if (parsedResponse.status === 'success') {
          const role = parsedResponse.role;
          this.auth.setUserId(parsedResponse.idUser); 
          console.log(role);
          // Navigate based on role
          if (role === 'CANDIDAT') {
            this.router.navigate(['/users/candidate']);
          } else if (role === 'CED') {
            this.router.navigate(['/users/ced']);
          } else if (role === 'PROFESSEUR') {
            this.router.navigate(['/users/professeur']);
          } else {
            alert('Unrecognized role!');
          }
>>>>>>> 3c9b79b098fc676b08746beeff362620fac12c26
        } else {
            alert(response.message || 'Login failed');
        }
    }, error => {
        console.error('Login request failed', error);
        alert('Login request failed');
    });
}

logout() {
  // Clear stored data
  localStorage.removeItem('authToken');
  // Navigate back to the login page
  this.router.navigate(['/login']);
}
}
