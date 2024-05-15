import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  updateSuccess: boolean = false;
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  addUser() {
    const userData = this.userForm.value;

    axios.post<any>('https://localhost:44343/api/Users/', userData)
      .then(response => {
        console.log('User added successfully:', response);
        // Clear the form after successful addition
        this.userForm.reset();
        this.updateSuccess = true;
      })
      .catch(error => {
        console.error('Error adding user:', error);
        this.updateSuccess = false;
      });
  }

}