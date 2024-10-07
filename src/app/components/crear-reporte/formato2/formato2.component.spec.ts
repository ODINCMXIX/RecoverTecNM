import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formato2Component } from './formato2.component';

describe('Formato2Component', () => {
  let component: Formato2Component;
  let fixture: ComponentFixture<Formato2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formato2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formato2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
