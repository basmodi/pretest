import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  input1: number
  col3 : boolean
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      input1: [''],
      input2: ['isPrime']
    });
  }

  ngOnInit(): void {
    this.input2Change(this.myForm.value.input2)
  }

  input1Enter(vaule) {
    this.myForm.value.input1 = 1
    return
  }

  input1Change(vaule) {
    let valueRound = (Number.isInteger(Math.round(vaule)))
    this.col3 = valueRound
    this.myForm.value.input1 = valueRound ? Math.round(vaule) : vaule
    return
  }

  input2Change(vaule) {
    let valueRound = (Number.isInteger(Math.round(vaule)))
    this.col3 = valueRound
    return
  }

  
  
}
