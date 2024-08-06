import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CivicPage } from './civic.page';

describe('CivicPage', () => {
  let component: CivicPage;
  let fixture: ComponentFixture<CivicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CivicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
