import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGrocerysComponent } from './get-grocerys.component';

describe('GetGrocerysComponent', () => {
  let component: GetGrocerysComponent;
  let fixture: ComponentFixture<GetGrocerysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGrocerysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGrocerysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
