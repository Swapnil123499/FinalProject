import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeachproductComponent } from './updateeachproduct.component';

describe('UpdateeachproductComponent', () => {
  let component: UpdateeachproductComponent;
  let fixture: ComponentFixture<UpdateeachproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateeachproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateeachproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
