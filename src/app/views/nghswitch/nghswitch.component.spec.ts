import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghswitchComponent } from './nghswitch.component';

describe('NghswitchComponent', () => {
  let component: NghswitchComponent;
  let fixture: ComponentFixture<NghswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
