import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  displayDivController: string = '';

  first: any[] = [
    { button: 'C', class: 'btn-operator', id: 'clear' },
    { button: '/', class: 'btn-operator', id: '/' },
    { button: 'X', class: 'btn-operator', id: '*' },
    { button: '', class: 'btn-operator', id: 'backspace', i: 'ri-delete-back-2-line' }
  ];
  second: any[] = [
    { button: '7', class: 'btn-number', id: '7' },
    { button: '8', class: 'btn-number', id: '8' },
    { button: '9', class: 'btn-number', id: '9' },
    { button: '-', class: 'btn-operator', id: '-' }
  ];
  third: any[] = [
    { button: '4', class: 'btn-number', id: '4' },
    { button: '5', class: 'btn-number', id: '5' },
    { button: '6', class: 'btn-number', id: '6' },
    { button: '+', class: 'btn-operator', id: '+' }
  ];
  fourth: any[] = [
    { button: '1', class: 'btn-number', id: '1', rowspan: '1' },
    { button: '2', class: 'btn-number', id: '2', rowspan: '1' },
    { button: '3', class: 'btn-number', id: '3', rowspan: '1' },
    { button: '=', class: 'btn-equal', id: 'equal', rowspan: '2' }
  ];
  fifthy: any[] = [
    { button: '(', class: 'btn-operator', id: '(' },
    { button: '0', class: 'btn-operator', id: '0' },
    { button: ')', class: 'btn-operator', id: ')' }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  calculateResult(item: any) {
    if (item.id == 'clear') {
      this.displayDivController = ''
    } else if (item.id == 'backspace') {
      var str = this.displayDivController.toString();
      this.displayDivController = str.substring(0, str.length - 1)
    } else if (this.displayDivController != '' && item.id == 'equal') {
      this.displayDivController = eval(this.displayDivController)
    } else if (this.displayDivController == '' && item.id == 'equal') {
      this.displayDivController = 'Empty!'
      setTimeout(() => {
        this.displayDivController = ''
      }, 1200)
    } else {
      this.displayDivController += item.id
    }
  }

}
