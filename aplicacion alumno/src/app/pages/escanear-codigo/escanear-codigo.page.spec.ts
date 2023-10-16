import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanearCodigoPage } from './escanear-codigo.page';

describe('EscanearCodigoPage', () => {
  let component: EscanearCodigoPage;
  let fixture: ComponentFixture<EscanearCodigoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscanearCodigoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
