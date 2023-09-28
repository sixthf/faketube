import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'videoList',
    loadChildren: () =>
      import('./video-list/video-list.module').then((m) => m.VideoListModule),
  },
  {
    path: 'videoItem',
    loadChildren: () =>
      import('./video-items/video-items.module').then(
        (m) => m.VideoItemsModule
      ),
  },
  {
    path: '',
    redirectTo: 'videoList',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'videoList',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
