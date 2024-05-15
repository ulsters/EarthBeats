import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {
  userId!: number;
  userForm!: FormGroup;
  updateSuccess = false;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userId: [''],
      username: [''],
      password: [''],
      userEmail: [''],
      role:['']
      // Add other user properties here...
    });

    this.route.params.subscribe(params => {
      this.userId = +params['id'];
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    axios.get<any>('https://localhost:44343/api/Users/' + this.userId)
      .then(response => {
        const userData = response.data;
        this.userForm.patchValue({
          userId: userData.userId,
          username: userData.username,
          password: userData.password,
          userEmail: userData.userEmail,
          role : userData.role
        });
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }

  updateUser() {
    const updatedUserData = this.userForm.value;
    const userId = this.userId;
  
    axios.put<any>('https://localhost:44343/api/Users/' + userId, updatedUserData)
      .then(response => {
        console.log('User updated successfully:', response);
        this.updateSuccess = true;
      })
      .catch(error => {
        console.error('Error updating user:', error);
        this.updateSuccess = false;
      });
  }

}