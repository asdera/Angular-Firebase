import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainterDetailComponent } from './painter-detail.component';

describe('PainterDetailComponent', () => {
  let component: PainterDetailComponent;
  let fixture: ComponentFixture<PainterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
