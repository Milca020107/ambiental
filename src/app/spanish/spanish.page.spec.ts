import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpanishPage } from './spanish.page';

describe('SpanishPage', () => {
  let component: SpanishPage;
  let fixture: ComponentFixture<SpanishPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpanishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
