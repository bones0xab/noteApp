import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowView } from './show-view';

describe('ShowView', () => {
  let component: ShowView;
  let fixture: ComponentFixture<ShowView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
