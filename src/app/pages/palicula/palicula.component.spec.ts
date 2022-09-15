import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaliculaComponent } from './palicula.component';

describe('PaliculaComponent', () => {
  let component: PaliculaComponent;
  let fixture: ComponentFixture<PaliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
