import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchFilter';
  name="";
  employee = [
    { 
      "name" : "Rahul kumar",
      "salary" : "100000",
      "location" : 'Hyderabad',
      "technology":'Angular'
      },
    { 
      "name" : "manas singh",
      "salary" : "200000",
      "location" : 'andra pradesh', 
      "technology":'UI developer'
      },
    { 
      "name" : "sai sreeram",
      "salary" : "30000",
      "location" : 'bangloreo',
      "technology":'Ux Developer'
      },
      { 
        "name" : "sachin",
        "salary" : "80000",
        "location" : 'varanasi',
        "technology":'Ux Developer'
        }
  ]
}
