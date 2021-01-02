import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  //creating blank object 'data' to store data from the form. (this is javascript object)
  data = {
    to:"",
    subject:"",
    message:""
  }
  constructor() { }

  ngOnInit(): void {
  }

  //submit form function
  doSubmitForm() {
    console.log("submitting form...");
    console.log("DATA", this.data); //printing data on console, you will get js object
  }

}
