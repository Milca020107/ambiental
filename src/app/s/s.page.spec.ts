import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SPage } from './s.page';

describe('SPage', () => {
  let component: SPage;
  let fixture: ComponentFixture<SPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
