import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkitaSbComponent } from './akita-sb.component';

describe('AkitaSbComponent', () => {
  let component: AkitaSbComponent;
  let fixture: ComponentFixture<AkitaSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkitaSbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkitaSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
