import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNote } from './show-note';

describe('ShowNote', () => {
  let component: ShowNote;
  let fixture: ComponentFixture<ShowNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
