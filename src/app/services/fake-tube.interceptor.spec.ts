import { TestBed } from '@angular/core/testing';

import { FakeTubeInterceptor } from './fake-tube.interceptor';

describe('FakeTubeInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FakeTubeInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FakeTubeInterceptor = TestBed.inject(FakeTubeInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
