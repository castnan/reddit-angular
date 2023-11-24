import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMainPage } from './feed-main.page';

describe('FeedMainPage', () => {
  let component: FeedMainPage;
  let fixture: ComponentFixture<FeedMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedMainPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
