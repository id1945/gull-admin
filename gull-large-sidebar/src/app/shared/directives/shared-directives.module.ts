import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownAnchorDirective } from './dropdown-anchor.directive';
import { DropdownLinkDirective } from './dropdown-link.directive';
import { AppDropdownDirective } from './dropdown.directive';
import { ScrollToDirective } from './scroll-to.directive';
import { SidebarDirective, SidebarContainerDirective, SidebarContentDirective, SidebarTogglerDirective } from './sidebar.directive';
import { HighlightjsDirective } from './highlightjs.directive';
import { FullScreenWindowDirective } from './full-screen.directive';

const directives = [
  DropdownAnchorDirective,
  DropdownLinkDirective,
  AppDropdownDirective,
  ScrollToDirective,
  SidebarDirective,
  SidebarContainerDirective,
  SidebarContentDirective,
  SidebarTogglerDirective,
  HighlightjsDirective,
  FullScreenWindowDirective
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: directives,
  exports: directives
})
export class SharedDirectivesModule { }
