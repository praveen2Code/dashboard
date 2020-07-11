import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizualComponent } from './vizual.component';

describe('VizualComponent', () => {
  let component: VizualComponent;
  let fixture: ComponentFixture<VizualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
