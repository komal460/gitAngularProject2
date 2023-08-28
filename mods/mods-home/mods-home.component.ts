import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
modalOpen = false;
items = [
  { title: 'why is the sky blue', content: 'The sky is blue beacuse it is'},
  { title: 'What does an orange taste like?', content: 'An orange tastes like orange'},
  { title: 'What color is that cat', content: 'the cat is an white color'}
]

  constructor(){

  }
  ngOnInit(): void {
    
  }
  onClick(){
    this.modalOpen = !this.modalOpen;
  }
 
}
