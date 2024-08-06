import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EPage } from './e.page';

describe('EPage', () => {
  let component: EPage;
  let fixture: ComponentFixture<EPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
