import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tailwind02Component } from './tailwind02.component';

describe('Tailwind02Component', () => {
  let component: Tailwind02Component;
  let fixture: ComponentFixture<Tailwind02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tailwind02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tailwind02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
