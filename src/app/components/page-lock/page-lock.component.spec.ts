import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLockComponent } from './page-lock.component';

describe('PageLockComponent', () => {
  let component: PageLockComponent;
  let fixture: ComponentFixture<PageLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
