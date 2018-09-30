import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public emailContacto: string;
  constructor() { }

  ngOnInit() {
  }
  guardarEmail() {
    //  console.log(this.emailContacto);
    // guardamos en localstorage
    localStorage.setItem('emailContato', this.emailContacto);
    // recupero del localstorage:
    // console.log(localStorage.getItem('emailContato'));

  }

}
