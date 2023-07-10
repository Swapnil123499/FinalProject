import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AllproductsComponent } from './allproducts.component';
import { ProductService } from 'src/app/services/product.service';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('AllproductsComponent', () => {
  let component: AllproductsComponent;
  let fixture: ComponentFixture<AllproductsComponent>;
  let service:ProductService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproductsComponent, AppComponent ],
      providers:[ProductService],
      imports:[AppRoutingModule,FormsModule,HttpClientModule]
    })
    .compileComponents();

  });

  beforeEach(()=>{

    fixture = TestBed.createComponent(AllproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(ProductService)
  });

  it('unit test case of subcribe method', fakeAsync(()=>{
    let spy=spyOn(service,'getproduct').and.returnValue(of([]));
    let subspy= spyOn(service.getproduct(), 'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(subspy)
    expect(subspy).toHaveBeenCalled();
  }));
});
