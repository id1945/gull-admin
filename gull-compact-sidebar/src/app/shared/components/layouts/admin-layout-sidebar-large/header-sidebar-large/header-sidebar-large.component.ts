import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../../services/navigation.service';
import { SearchService } from '../../../../services/search.service';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header-sidebar-large',
  templateUrl: './header-sidebar-large.component.html',
  styleUrls: ['./header-sidebar-large.component.scss']
})
export class HeaderSidebarLargeComponent implements OnInit {

    notifications: any[];

    constructor(
      private navService: NavigationService,
      public searchService: SearchService,
      private auth: AuthService
    ) {
      this.notifications = [
        {
          icon: 'i-Speach-Bubble-6',
          title: 'New message',
          badge: '3',
          text: 'James: Hey! are you busy?',
          time: new Date(),
          status: 'primary',
          link: '/chat'
        },
        {
          icon: 'i-Receipt-3',
          title: 'New order received',
          badge: '$4036',
          text: '1 Headphone, 3 iPhone x',
          time: new Date('11/11/2018'),
          status: 'success',
          link: '/tables/full'
        },
        {
          icon: 'i-Empty-Box',
          title: 'Product out of stock',
          text: 'Headphone E67, R98, XL90, Q77',
          time: new Date('11/10/2018'),
          status: 'danger',
          link: '/tables/list'
        },
        {
          icon: 'i-Data-Power',
          title: 'Server up!',
          text: 'Server rebooted successfully',
          time: new Date('11/08/2018'),
          status: 'success',
          link: '/dashboard/v2'
        },
        {
          icon: 'i-Data-Block',
          title: 'Server down!',
          badge: 'Resolved',
          text: 'Region 1: Server crashed!',
          time: new Date('11/06/2018'),
          status: 'danger',
          link: '/dashboard/v3'
        }
      ];
    }
  
    ngOnInit() {
    }
  
    toggelSidebar() {
      const state = this.navService.sidebarState;
      if (state.childnavOpen && state.sidenavOpen) {
        return state.childnavOpen = false;
      }
      if (!state.childnavOpen && state.sidenavOpen) {
        return state.sidenavOpen = false;
      }
      // item has child items
      if (!state.sidenavOpen && !state.childnavOpen 
        && this.navService.selectedItem.type === 'dropDown') {
          state.sidenavOpen = true;
          setTimeout(() => {
              state.childnavOpen = true;
          }, 50);
      }
      // item has no child items
      if (!state.sidenavOpen && !state.childnavOpen) {
        state.sidenavOpen = true;
      }
    }
  
    signout() {
      this.auth.signout();
    }

}
