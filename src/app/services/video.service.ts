import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, map } from 'rxjs';
import { IVideo, Video } from '../models/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly urlVideos: string = 'youtube/v3/videos?';

  constructor(private apiService: ApiService) {}
  getVideoList(): Observable<Video[]> {
    let queryParams: string = [
      `chart=mostPopular`,
      `regionCode=IT`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=8`,
      `type=video`,
    ].join('&');
    return this.apiService
      .getApi(`${this.urlVideos}${queryParams}`)
      .pipe(map((r: any) => r.items.map((value: IVideo) => new Video(value))));
  }
  getVideoById(videoId: string): Observable<Video> {
    const queryParams: string = [
      `id=${videoId}`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=1`,
    ].join('&');
    return this.apiService
      .getApi(`${this.urlVideos}${queryParams}`)
      .pipe(map((r: any) => r.items.map((value: IVideo) => new Video(value))));
  }
}
