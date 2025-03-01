import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageGeneratorComponent } from './voyage-generator.component';

describe('VoyageGeneratorComponent', () => {
  let component: VoyageGeneratorComponent;
  let fixture: ComponentFixture<VoyageGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyageGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyageGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
