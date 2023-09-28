import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Observable } from 'rxjs';
import { Video } from '../models/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent {
  videoList$: Observable<any> = new Observable();
  videoList: Video[] = [];
  constructor(private videoService: VideoService, private router: Router) {
    this.videoList$ = this.videoService.getVideoList();

    this.videoService.getVideoList().subscribe((res: Video[]) => {
      this.videoList = res;
    });
  }
  goToDetails(id: string) {
    this.router.navigate(['videoItem/', id]);
  }
}
