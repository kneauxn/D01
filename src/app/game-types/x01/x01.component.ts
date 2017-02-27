import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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
      throw1Var: ['',[Validators.maxLength(3)]],
      throw2Var: ['',[Validators.maxLength(3)]],
      throw3Var: ['',[Validators.maxLength(3)]]
    });
  }

}
/* Validations I'm going to need:
X max of three chars
  starting either with a int, T, D or B
  int less than 20
*/
