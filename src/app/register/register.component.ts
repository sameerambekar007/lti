import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {contact:contact;
  ngOnInit() {
  this.contact = { 
      uname:"",
      psw:"",
      city:"",
      mobile: null,
      email:"",
    };
}
  onSubmit(contactForm)
{
  //console.log("Hello");
  console.log(contactForm.value);
}
  constructor() { }
}
export class contact {
  uname:string;
  psw:string;
  city:string;
  mobile:number;
  email:string;
}
