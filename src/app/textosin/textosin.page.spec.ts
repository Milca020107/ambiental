import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextosinPage } from './textosin.page';

describe('TextosinPage', () => {
  let component: TextosinPage;
  let fixture: ComponentFixture<TextosinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TextosinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
