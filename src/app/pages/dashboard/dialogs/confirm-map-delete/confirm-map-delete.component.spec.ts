import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMapDeleteComponent } from './confirm-map-delete.component';

describe('ConfirmMapDeleteComponent', () => {
  let component: ConfirmMapDeleteComponent;
  let fixture: ComponentFixture<ConfirmMapDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmMapDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmMapDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
