import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EthicsPage } from './ethics.page';

describe('EthicsPage', () => {
  let component: EthicsPage;
  let fixture: ComponentFixture<EthicsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EthicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
