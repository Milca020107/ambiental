import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApPage } from './ap.page';

describe('ApPage', () => {
  let component: ApPage;
  let fixture: ComponentFixture<ApPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
