import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEachComponent } from './for-each.component';

describe('ForEachComponent', () => {
  let component: ForEachComponent;
  let fixture: ComponentFixture<ForEachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForEachComponent]
    });
    fixture = TestBed.createComponent(ForEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
