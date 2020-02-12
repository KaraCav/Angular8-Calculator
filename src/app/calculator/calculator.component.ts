import { Component, OnInit } from '@angular/core';
import { Operator } from 'rxjs';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  displayNumber= '0';
  integerNumber1 = null;
  integerNumber2 = null;
  operator = null;
  nextOperator = null;
  answer = null;
  getNumber(input:string) {
    if(this.displayNumber === '0') {
      this.displayNumber = input;
    }
    else {
      this.displayNumber = this.displayNumber + input;
    }
    this.integerNumber1 = +this.displayNumber;
  }
  getOperator(input:string) {
    if(this.integerNumber2 === null) {
    //  this.operator = input;
      this.integerNumber2 = this.integerNumber1;
      this.integerNumber1 = null;
      this.displayNumber = '0';
    }
    else {
      this.getAnswer();
    //  this.operator = input;
     // this.nextOperator = input;
      console.log(this.integerNumber1,input, this.integerNumber2, "=", this.answer);
    }
    this.operator = input;
  }
  getAnswer() {
    switch(this.operator) { 
      case '+':
        this.answer = this.integerNumber2 + this.integerNumber1;
        break;
      case '-':
        this.answer = this.integerNumber2 - this.integerNumber1;
        break;
      case '*':
        this.answer = this.integerNumber2 * this.integerNumber1;
        break;
      case '/':
          this.answer = this.integerNumber2 / this.integerNumber1;
    }
    this.displayNumber = this.answer;
    this.integerNumber1 = null;
    this.integerNumber2 = this.answer;
  }
  allClear() {
    this.displayNumber= '0';
    this.integerNumber1 = null;
    this.integerNumber2 = null;
    this.operator = null;
    this.answer = null;
  }
  ngOnInit() {
  }
}