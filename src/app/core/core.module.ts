import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpClientService } from '../custom-http-client.service';
import { CookiesInterceptor } from '../cookies.interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    CustomHttpClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CookiesInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
