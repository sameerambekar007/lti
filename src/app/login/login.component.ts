import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {contact:contact;
  ngOnInit() {
  this.contact = { 
      uname:"",
      psw:"",
    };
}
constructor(private router:Router ) {

}

  onSubmit(contactForm)
{
  //console.log("Hello");
  console.log(contactForm.value);

  if(this.contact.uname=="Sameer" && this.contact.psw=="123"){
    this.router.navigate(['view/'+this.contact.uname]);
  }
  else{
    console.log("Invalid login");
  }
}
  
}
export class contact {
  uname:string;
  psw:string;
}
