import { Component } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  
  constructor() { }

  ngOnInit(): void {
    $('#myDataTable').DataTable({
      "searching": true,
      "dom": '<"top"f>',
      "lengthMenu": undefined 
    });
  }


}
