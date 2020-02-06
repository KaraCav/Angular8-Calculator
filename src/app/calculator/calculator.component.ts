import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  displayNumber= '0';
  integerNumber1 = 0;
  integerNumber2 = 0;
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  public getNumber(v: string) {
    if(this.displayNumber === '0') {
      this.displayNumber = v;
    }
    else {
      +this.displayNumber === this.integerNumber2 ? this.displayNumber = "0" : this.displayNumber += v;
    }
    if(this.integerNumber2 !== 0 && this.integerNumber1 ===0) {
        this.integerNumber1 = +v;
    }
    console.log('get number display', this.displayNumber);
  }

  public getOperator(v: string) {
    this.operator = v;
    console.log('operator', this.operator);
    if(this.integerNumber2 === 0) {
    this.integerNumber2 = +this.displayNumber;    
    console.log('integer 2 complete', this.integerNumber2);
    }
    else {
      this.integerNumber1 = +this.displayNumber;  
        console.log('int 1', this.integerNumber1);
      }
      if(this.integerNumber1 !==0 && this.integerNumber2 !== 0) {
        if(this.operator === "+") {
          this.integerNumber2 = this.integerNumber1 + this.integerNumber2;
          console.log('final answer', this.integerNumber2);
        }
        this.displayNumber = this.integerNumber2 + "";
      }
  }
  public allClear() {
    this.integerNumber1 = 0;
    this.displayNumber = '0';
  }

  public itEquals() {

  }


  ngOnInit() {
  }

}
