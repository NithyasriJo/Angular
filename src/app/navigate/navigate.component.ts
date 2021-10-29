import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigate(val:any){
    if(val == "loans"){
      this.router.navigateByUrl("loan");
    } 
    else if(val == "EMI"){
      this.router.navigateByUrl("EMI");
    }
    else{
      
    }
  }
}
