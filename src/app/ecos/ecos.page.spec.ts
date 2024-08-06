import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EcosPage } from './ecos.page';

describe('EcosPage', () => {
  let component: EcosPage;
  let fixture: ComponentFixture<EcosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EcosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
