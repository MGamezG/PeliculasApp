import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePaginateComponent } from './home-paginate.component';

describe('HomePaginateComponent', () => {
  let component: HomePaginateComponent;
  let fixture: ComponentFixture<HomePaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePaginateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
