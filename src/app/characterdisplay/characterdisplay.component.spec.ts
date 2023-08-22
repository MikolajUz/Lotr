import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdisplayComponent } from './characterdisplay.component';

describe('CharacterdisplayComponent', () => {
  let component: CharacterdisplayComponent;
  let fixture: ComponentFixture<CharacterdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterdisplayComponent]
    });
    fixture = TestBed.createComponent(CharacterdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
