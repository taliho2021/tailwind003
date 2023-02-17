import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tailwind01Component } from './tailwind01.component';

describe('Tailwind01Component', () => {
  let component: Tailwind01Component;
  let fixture: ComponentFixture<Tailwind01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tailwind01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tailwind01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
