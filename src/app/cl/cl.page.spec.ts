import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClPage } from './cl.page';

describe('ClPage', () => {
  let component: ClPage;
  let fixture: ComponentFixture<ClPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
