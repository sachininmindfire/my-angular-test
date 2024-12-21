import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObvlsComponent } from './rxjs-obvls.component';

describe('RxjsObvlsComponent', () => {
  let component: RxjsObvlsComponent;
  let fixture: ComponentFixture<RxjsObvlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsObvlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsObvlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
