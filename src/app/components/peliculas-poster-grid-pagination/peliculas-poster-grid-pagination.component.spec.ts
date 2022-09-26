import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPosterGridPaginationComponent } from './peliculas-poster-grid-pagination.component';

describe('PeliculasPosterGridPaginationComponent', () => {
  let component: PeliculasPosterGridPaginationComponent;
  let fixture: ComponentFixture<PeliculasPosterGridPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasPosterGridPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasPosterGridPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
