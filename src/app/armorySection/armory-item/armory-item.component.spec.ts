import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoryItemComponent } from './armory-item.component';

describe('ArmoryItemComponent', () => {
  let component: ArmoryItemComponent;
  let fixture: ComponentFixture<ArmoryItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmoryItemComponent]
    });
    fixture = TestBed.createComponent(ArmoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
