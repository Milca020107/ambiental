import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IPage } from './i.page';

describe('IPage', () => {
  let component: IPage;
  let fixture: ComponentFixture<IPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
