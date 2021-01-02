import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/service/email.service';

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

  //hiding spinner just before sending mail
  flag=false;

  constructor(private email:EmailService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  //submit form function
  doSubmitForm() {
    console.log("submitting form...");
    console.log("DATA", this.data); //printing data on console, you will get js object

    //Adding check pass
    if(this.data.to =='' || this.data.subject=='' || this.data.message==''){
      //adding message using snack
      this.snack.open("fiels cannot be empty!", "OK");
      return;
    }

    //just sending before sending mail
    this.flag=true;

    //sending data to backend after defining in constructor.
    this.email.sendEmail(this.data).subscribe(
      //if success
      response=>{
        console.log(response);
        this.flag=false; //again hiding after is sent
        this.snack.open("Email Sent Successfully!", "OK");
      },
      error=>{
        console.log(error);
        this.flag=false; //also when there is error.
        this.snack.open("Error! Something went wrong!", "OK");
      }
    )
  }

}
