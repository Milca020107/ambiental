import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToPage } from './to.page';

describe('ToPage', () => {
  let component: ToPage;
  let fixture: ComponentFixture<ToPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
