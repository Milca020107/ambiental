import { ComponentFixture, TestBed } from '@angular/core/testing';
import { McPage } from './mc.page';

describe('McPage', () => {
  let component: McPage;
  let fixture: ComponentFixture<McPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(McPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
