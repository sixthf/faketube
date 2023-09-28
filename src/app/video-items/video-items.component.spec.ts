import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoItemsComponent } from './video-items.component';

describe('VideoItemsComponent', () => {
  let component: VideoItemsComponent;
  let fixture: ComponentFixture<VideoItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoItemsComponent]
    });
    fixture = TestBed.createComponent(VideoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
