import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoItemsRoutingModule } from './video-items-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoItemsComponent } from './video-items.component';

@NgModule({
  declarations: [VideoItemsComponent],
  imports: [CommonModule, VideoItemsRoutingModule],
})
export class VideoItemsModule {}
