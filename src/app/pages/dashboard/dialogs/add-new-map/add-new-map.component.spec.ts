import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMapComponent } from './add-new-map.component';

describe('AddNewMapComponent', () => {
  let component: AddNewMapComponent;
  let fixture: ComponentFixture<AddNewMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
