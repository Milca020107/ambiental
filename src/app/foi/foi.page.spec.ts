import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoiPage } from './foi.page';

describe('FoiPage', () => {
  let component: FoiPage;
  let fixture: ComponentFixture<FoiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
