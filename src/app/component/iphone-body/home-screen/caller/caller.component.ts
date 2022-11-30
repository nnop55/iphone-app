import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caller',
  templateUrl: './caller.component.html',
  styleUrls: ['./caller.component.css']
})
export class CallerComponent implements OnInit {

  numberPad: any[] = [];

  numberValue: any = new Object();

  selectedNums: string = '';
  deleteNum: boolean = false;


  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.numberPadFunc();
  }

  numberPadFunc() {
    this.numberPad = [
      { num: '1', text: '', clicked: false },
      { num: '2', text: 'A B C', clicked: false },
      { num: '3', text: 'D E F', clicked: false },
      { num: '4', text: 'G H I', clicked: false },
      { num: '5', text: 'J K L', clicked: false },
      { num: '6', text: 'M N O', clicked: false },
      { num: '7', text: 'P Q R S', clicked: false },
      { num: '8', text: 'T U V', clicked: false },
      { num: '9', text: 'W X Y Z', clicked: false },
      { num: '*', text: '', clicked: false },
      { num: '0', text: '+', clicked: false },
      { num: '#', text: '', clicked: false },
    ]

  }

  checkNumClicked(item: any) {
    this.numberPad.forEach(o => {
      o.clicked = false;
    })

    item.clicked = true;
    if (item.clicked == true) {
      this.selectedNums += item.num;
    }

  }

  deleteNumFunc() {
    this.deleteNum = true;
    if (this.deleteNum == true) {
      this.selectedNums = '';
    }

    if (this.selectedNums == '') {
      this.deleteNum = false;
    }
  }

  routeCallInner() {
    if (this.selectedNums != '') {
      this.router.navigate(['/call-inner']);
      localStorage.setItem('call', this.selectedNums)
    } else {
      this.openSnackBar("If you want make the call, first you have to type mobile number", "OK")
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
