import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EePage } from './ee.page';

describe('EePage', () => {
  let component: EePage;
  let fixture: ComponentFixture<EePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
