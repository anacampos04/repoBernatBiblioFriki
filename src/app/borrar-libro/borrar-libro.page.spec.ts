import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorrarLibroPage } from './borrar-libro.page';

describe('BorrarLibroPage', () => {
  let component: BorrarLibroPage;
  let fixture: ComponentFixture<BorrarLibroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorrarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
