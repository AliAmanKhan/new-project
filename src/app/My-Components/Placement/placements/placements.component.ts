import { Component } from '@angular/core';
import data from '../../../../assets/placement2021-22.json';

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.scss']
})
export class PlacementsComponent {

  dataSource= data;
  // placements = [
  //   {
  //     "name": "Sourabh Singh",
  //     "branch": "Information Technology",
  //     "company": "Secure Learning Pvt. Ltd."
  //   }
  // ];

  displayedColumns: string[] = ['serial', 'name', 'branch', 'company'];
}
