import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmathliveComponent } from './ngmathlive.component';

describe('NgmathliveComponent', () => {
  let component: NgmathliveComponent;
  let fixture: ComponentFixture<NgmathliveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgmathliveComponent]
    });
    fixture = TestBed.createComponent(NgmathliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
