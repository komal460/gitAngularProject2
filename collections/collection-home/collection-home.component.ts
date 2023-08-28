import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {
data = [
  {name: 'James', age: 24, job: 'Designer', employed: true },
  {name: 'Jill', age: 22, job: 'Engineer',  employed: false },
  {name: 'Elyse', age: 26, job: 'Engineer',  employed: true }
 ];
 
 headers = [
  { key: 'employed', label: 'Has a job'},
  { key: 'name', label: 'Name'},
  { key: 'age', label: 'Age'},
  { key: 'job', label: 'Job'},
  
 ];

 constructor(){

 }
 ngOnInit() {
   
 }

}