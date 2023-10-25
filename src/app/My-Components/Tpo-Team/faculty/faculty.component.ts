import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {

  faculty = [
    {
      "name": "Mr. Abhishek Soni",
      "subPost": "Faculty-InCharge & Training and Placement Officer",
      "post": "Assistant Professor",
      "department": "Department of Information & Technology",
      "contact": "+91-9252519997"
    },
    {
      "name": "Ms. Aditi Dwivedi",
      "subPost": "Co-FIC, Training and Placement",
      "post": "Assistant Professor",
      "department": "Department of Management Studies",
      "contact": "+91-9530452013"
    },
    {
      "name": "Mr. Rotash Kumar",
      "subPost": "Faculty-InCharge & Training and Placement Officer",
      "post": "Assistant Professor",
      "department": "Department of Electronics & Communication Engg.",
      "contact": "+91-9413571633"
    },
  ]
}
