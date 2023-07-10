import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingcartComponent } from './loadingcart.component';

describe('LoadingcartComponent', () => {
  let component: LoadingcartComponent;
  let fixture: ComponentFixture<LoadingcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
