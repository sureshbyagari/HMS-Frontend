import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinetComponent } from './patinet.component';

describe('PatinetComponent', () => {
  let component: PatinetComponent;
  let fixture: ComponentFixture<PatinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatinetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
