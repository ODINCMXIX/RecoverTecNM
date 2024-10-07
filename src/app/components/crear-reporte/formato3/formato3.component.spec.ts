import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formato3Component } from './formato3.component';

describe('Formato3Component', () => {
  let component: Formato3Component;
  let fixture: ComponentFixture<Formato3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formato3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formato3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
