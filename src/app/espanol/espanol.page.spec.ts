import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspanolPage } from './espanol.page';

describe('EspanolPage', () => {
  let component: EspanolPage;
  let fixture: ComponentFixture<EspanolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspanolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
