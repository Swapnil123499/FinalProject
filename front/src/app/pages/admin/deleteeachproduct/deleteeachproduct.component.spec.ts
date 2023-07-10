import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteeachproductComponent } from './deleteeachproduct.component';

describe('DeleteeachproductComponent', () => {
  let component: DeleteeachproductComponent;
  let fixture: ComponentFixture<DeleteeachproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteeachproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteeachproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
