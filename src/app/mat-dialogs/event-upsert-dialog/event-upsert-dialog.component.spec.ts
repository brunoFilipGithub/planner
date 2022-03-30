import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUpsertDialogComponent } from './event-upsert-dialog.component';

describe('EventUpsertDialogComponent', () => {
  let component: EventUpsertDialogComponent;
  let fixture: ComponentFixture<EventUpsertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventUpsertDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUpsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
