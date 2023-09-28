import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListRoutingModule } from './video-list.routing';
import { VideoListComponent } from './video-list.component';
import { Truncate } from '../pipes/truncate.pipe';

@NgModule({
  declarations: [VideoListComponent, Truncate],
  imports: [CommonModule, VideoListRoutingModule],
})
export class VideoListModule {}
