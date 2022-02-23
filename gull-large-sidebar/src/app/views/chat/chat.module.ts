import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatLeftSidebarComponent } from './chat-left-sidebar/chat-left-sidebar.component';
import { ChatContentsComponent } from './chat-contents/chat-contents.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';

@NgModule({
  imports: [
    CommonModule,
    SharedDirectivesModule,
    SharedPipesModule,
    FormsModule,
    PerfectScrollbarModule,
    ChatRoutingModule
  ],
  declarations: [ChatComponent, ChatLeftSidebarComponent, ChatContentsComponent]
})
export class ChatModule { }
