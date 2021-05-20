import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeIconsComponent } from './dee-icons.component';

describe('DeeIconsComponent', () => {
  let component: DeeIconsComponent;
  let fixture: ComponentFixture<DeeIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeeIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
