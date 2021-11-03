import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {
selectedValue: any = 0;
 principalAmount: number = 0;
 months: number = 0;
 roi: number = 0;
 interest: number =0;
  constructor() {}

  ngOnInit(): void {}
  
  calculate(p:any, m:any, r:any){
    this.principalAmount = p;
    this.months = m;
    this.roi = r;
    this.interest = Number(this.roi) * (Number(this.principalAmount) / 100) * (Number(this.months)*0.0833333);
    this.interest = Math.ceil(this.interest);
  }
reset(){
  this.principalAmount=0;
  this.months=0;
  this.roi=0;
  this.selectedValue=0;
  this.interest=0;
}
valueChange(v:any){

}

}
