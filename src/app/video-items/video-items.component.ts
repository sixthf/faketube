import { Component } from '@angular/core';
import { VideoService } from '../services/video.service';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/video.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
})
export class VideoItemsComponent {
  idVideo: string = '';
  video?: Video;
  safeUrl?: SafeResourceUrl;
  constructor(
    private videoService: VideoService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
    this.activatedRoute.params.subscribe((r: any) => {
      this.idVideo = r['id'];
    });
    this.videoService.getVideoById(this.idVideo).subscribe((res: any) => {
      this.video = res[0];
      if (this.video) {
        this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.video.url
        );
      }
    });
  }
}
