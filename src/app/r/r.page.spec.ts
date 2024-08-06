import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RPage } from './r.page';

describe('RPage', () => {
  let component: RPage;
  let fixture: ComponentFixture<RPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
