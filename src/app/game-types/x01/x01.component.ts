import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-x01',
  templateUrl: './x01.component.html',
  styleUrls: ['./x01.component.css'],
})
export class X01Component implements OnInit {
  title = 'X01';
  turnInput: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.turnInput = this.formBuilder.group({
      throw1Var: ['',],
      throw2Var: ['',],
      throw3Var: ['',]
    });
  }

}
/* Validations I'm going to need:
max of three chars
starting either with a int, T, D or B
int less than 20
 */
