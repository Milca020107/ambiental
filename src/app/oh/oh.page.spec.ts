import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OhPage } from './oh.page';

describe('OhPage', () => {
  let component: OhPage;
  let fixture: ComponentFixture<OhPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
