import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { AppComponent } from 'src/app/app.component';
import { CartService } from 'src/app/services/cart.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: CartService;
  let username:String;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent, AppComponent ],
      providers:[CartService],
      imports:[AppRoutingModule,FormsModule,HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(CartService)
  });

  it('unit test case of subcribe method', fakeAsync(()=>{
    let spy=spyOn(service,'getcartproductbyusername').and.returnValue(of([]));
    let subspy= spyOn(service.getcartproductbyusername(username), 'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(subspy)
    expect(subspy).toHaveBeenCalled();
  }));
});
