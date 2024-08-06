import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TpPage } from './tp.page';

describe('TpPage', () => {
  let component: TpPage;
  let fixture: ComponentFixture<TpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
