import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedListComponent } from './featured-list.component';

describe('FeaturedListComponent', () => {
  let component: FeaturedListComponent;
  let fixture: ComponentFixture<FeaturedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
