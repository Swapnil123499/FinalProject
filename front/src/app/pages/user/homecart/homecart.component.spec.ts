import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecartComponent } from './homecart.component';

describe('HomecartComponent', () => {
  let component: HomecartComponent;
  let fixture: ComponentFixture<HomecartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
