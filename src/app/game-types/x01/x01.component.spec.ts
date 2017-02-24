/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { X01Component } from './x01.component';

describe('X01Component', () => {
  let component: X01Component;
  let fixture: ComponentFixture<X01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
