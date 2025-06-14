import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddView } from './add-view';

describe('AddView', () => {
  let component: AddView;
  let fixture: ComponentFixture<AddView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
