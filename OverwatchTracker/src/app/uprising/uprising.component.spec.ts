import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UprisingComponent } from './uprising.component';

describe('UprisingComponent', () => {
  let component: UprisingComponent;
  let fixture: ComponentFixture<UprisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UprisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UprisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
