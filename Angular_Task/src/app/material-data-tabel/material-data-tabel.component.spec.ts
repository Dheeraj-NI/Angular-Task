import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDataTabelComponent } from './material-data-tabel.component';

describe('MaterialDataTabelComponent', () => {
  let component: MaterialDataTabelComponent;
  let fixture: ComponentFixture<MaterialDataTabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialDataTabelComponent]
    });
    fixture = TestBed.createComponent(MaterialDataTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
