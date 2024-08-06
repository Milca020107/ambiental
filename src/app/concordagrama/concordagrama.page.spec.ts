import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcordagramaPage } from './concordagrama.page';

describe('ConcordagramaPage', () => {
  let component: ConcordagramaPage;
  let fixture: ComponentFixture<ConcordagramaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConcordagramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
