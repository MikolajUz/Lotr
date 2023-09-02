import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoryListComponent } from './armory-list.component';

describe('ArmoryListComponent', () => {
  let component: ArmoryListComponent;
  let fixture: ComponentFixture<ArmoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmoryListComponent]
    });
    fixture = TestBed.createComponent(ArmoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
