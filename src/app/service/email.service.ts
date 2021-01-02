import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  //define constant
  private baseUrl:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }

  //creating function, data will contain, to: subject: and message:
  sendEmail(data:any){
    return this.http.post(`${this.baseUrl}/sendemail`, data) //it returns observer
  }

  //once request is sent then it will return promise, so we need to subscribe and it returns observer
}
