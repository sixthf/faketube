import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoItemsComponent } from './video-items.component';

const routes: Routes = [
  {
    path: ':id',
    component: VideoItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoItemsRoutingModule {}
