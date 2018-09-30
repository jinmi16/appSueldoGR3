import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  name = 'Angular 6';
  marked = false;
  theCheckbox = false;
  public arraycheck = [
    { id: '01', name: 'matematica' },
    { id: '02', name: 'Lenguaje' }
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleVisibility(e, id) {
    console.log(JSON.stringify(e.target) + ' | ' + id);
    this.marked = e.target.checked;
  }


}
