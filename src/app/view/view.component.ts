import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  uname:string;

  constructor(private router:Router,private active:ActivatedRoute) { 
    this.active.params.subscribe(param=>this.uname=param["un"]);
  }

  ngOnInit(): void {
  }
  Logout(){
    this.router.navigateByUrl('login');
  }

}
