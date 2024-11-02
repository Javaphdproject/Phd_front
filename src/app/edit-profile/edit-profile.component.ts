import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckbox
  ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'] // Fix 'styleUrl' to 'styleUrls'
})
export class EditProfileComponent implements OnInit {
  email: string = '';
  fname: string = '';
  lname: string = '';
  isPasswordVisible: boolean = false;

  tel: string = '';
  password: string = '';
  confirmedpassword: string = '';
  userId: number | null = null;
userType: string = "CANDIDAT";
  constructor(private auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.userId = this.auth.getUserId(); 
    if (this.userId) {
      this.fetchUserData(this.userId); // Fetch user data when the component initializes
    }
  }
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  fetchUserData(userId: number) {
    // Call the API to fetch user data. Adjust the URL as per your backend.
    this.http.get(`http://localhost:8089/phd/auth/getuser/${userId}`).subscribe(
      (data: any) => {
        // Assume your API returns an object with user details
        this.fname = data.prenom;
        this.lname = data.nom;
        this.email = data.email;
        this.tel = data.tel;
        this.password = data.mdp;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }

  update() {
    // Prepare user data for update, adjust as needed
    const updatedUserData = {
      "prenom": this.fname,
      "nom": this.lname,
      "email": this.email,
      "tel": this.tel,
      "mdp": this.password,
      "idUser": this.userId,
      "userType": this.userType
    };

 
    this.http.put('http://localhost:8089/phd/auth/edit', updatedUserData,  { responseType: 'text' }).subscribe(
      (response) => {
    alert(response);
  },
  (error) => {
   alert('Error updating user data');
  }
);

  }
}
