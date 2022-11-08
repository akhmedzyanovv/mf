import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperComponentComponent } from './wrapper.component';

describe('WrapperComponentComponent', () => {
  let component: WrapperComponentComponent;
  let fixture: ComponentFixture<WrapperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
