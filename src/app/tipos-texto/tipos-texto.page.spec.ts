import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiposTextoPage } from './tipos-texto.page';

describe('TiposTextoPage', () => {
  let component: TiposTextoPage;
  let fixture: ComponentFixture<TiposTextoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TiposTextoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
