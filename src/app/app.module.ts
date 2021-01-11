import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetPostsComponent } from './get-posts/get-posts.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';

@NgModule({
  declarations: [AppComponent, GetPostsComponent, ListPostsComponent, ExpansionPanelComponent, CreatePostsComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CoreModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HighlightModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),

        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
