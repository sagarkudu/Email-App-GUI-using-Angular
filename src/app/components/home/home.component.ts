import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snack : MatSnackBar) { }

  ngOnInit(): void {
  }

  //creating function to use MatSnackBar service
  btnClick(){
    console.log("btn click");
    this.snack.open("Email Sent...", "Cancel"); //now we have to link this home component
    
  }

}
