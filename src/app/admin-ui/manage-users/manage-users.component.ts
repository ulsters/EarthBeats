import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'datatables.net';
import axios from 'axios';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  userData: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    axios.get<any[]>('https://localhost:44343/api/Users')
      .then(response => {
        this.userData = response.data;
        this.initializeDataTable();
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }

  initializeDataTable() {
    const table = $('#myUserDataTable').DataTable({
      "searching": true,
      "dom": '<"top"f>rt<"bottom"lp><"clear">',
      "lengthMenu": [10, 25, 50, 100, 150, 200, 250],
      "pageLength": 10,
      "data": this.userData,
      "columns": [
        { "data": "userId" },
        { "data": "username" },
        { "data": "password" },
        { "data": "userEmail" },
        { "data": "role" },
        { 
          "data": "userId",
          "render": function(data) {
            return '<div style="display:flex; justify-content:center;"><button class="btn btn-primary detail-btn px-3" data-user-id="' + data + '">Detail</button>' +
                   '<button class="btn btn-danger delete-btn px-3 ms-2" data-user-id="' + data + '">Delete</button></div>' ;
          }
        }
      ]
    });


    $('#myUserDataTable').on('click', '.delete-btn', (event) => {
      const userId = $(event.currentTarget).data('user-id');
      this.deleteUser(userId);
    });

    // Event listener for detail buttons 
    $('#myUserDataTable').on('click', '.detail-btn', (event) => {
      const userId = $(event.currentTarget).data('user-id');
      this.navigateToUserDetails(userId);
    });
  }

  deleteUser(userId: number) {
    axios.delete('https://localhost:44343/api/Users/' + userId)
      .then(response => {
        $('#myUserDataTable').DataTable().destroy();
        this.fetchUserData();
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/modify-user', userId]);
  }
}