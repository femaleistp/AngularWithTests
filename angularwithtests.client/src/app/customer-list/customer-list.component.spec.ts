import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerListComponent } from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  //arrange

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerListComponent]
    });
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //act here

    //assert here
    expect(component).toBeTruthy();
  });

  it('should have a customer list', () => {
    component.customers.push("toast");

    expect(component.customers).toBeDefined();
    expect(component.customers).toEqual(["toast"]);
  });
});
