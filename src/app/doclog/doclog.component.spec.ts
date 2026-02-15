import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoclogComponent } from './doclog.component';

describe('DoclogComponent', () => {
  let component: DoclogComponent;
  let fixture: ComponentFixture<DoclogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoclogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoclogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
