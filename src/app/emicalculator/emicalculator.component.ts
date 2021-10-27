import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
  myvalue ="myval"
  constructor() { }

  ngOnInit(): void {}
    abc(myname:any,mypass:any){
      alert("HI" +myname +mypass);
    }


}
