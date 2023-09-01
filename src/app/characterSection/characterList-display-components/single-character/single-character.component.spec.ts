import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCharacterComponent } from './single-character.component';

describe('SingleCharacterComponent', () => {
  let component: SingleCharacterComponent;
  let fixture: ComponentFixture<SingleCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCharacterComponent]
    });
    fixture = TestBed.createComponent(SingleCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
