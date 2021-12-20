import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVendedorComponent } from './login-vendedor.component';

describe('LoginVendedorComponent', () => {
  let component: LoginVendedorComponent;
  let fixture: ComponentFixture<LoginVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
