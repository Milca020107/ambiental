import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiPage } from './fi.page';

describe('FiPage', () => {
  let component: FiPage;
  let fixture: ComponentFixture<FiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
