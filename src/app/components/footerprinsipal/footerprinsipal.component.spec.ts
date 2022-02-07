import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterprinsipalComponent } from './footerprinsipal.component';

describe('FooterprinsipalComponent', () => {
  let component: FooterprinsipalComponent;
  let fixture: ComponentFixture<FooterprinsipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterprinsipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterprinsipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
