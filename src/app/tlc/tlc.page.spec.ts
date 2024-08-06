import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TlcPage } from './tlc.page';

describe('TlcPage', () => {
  let component: TlcPage;
  let fixture: ComponentFixture<TlcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TlcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
