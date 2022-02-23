import { Injectable } from '@angular/core';
import { SidebarDirective } from '../directives/sidebar.directive';

@Injectable({
  providedIn: 'root'
})
export class SidebarHelperService {

  sidenavInstances: SidebarDirective[];

  constructor() {
      this.sidenavInstances = [];
  }

  /**
   * Set sidenav
   *
   * @param id
   * @param instance
   */
  setSidenav(id, instance): void {
      this.sidenavInstances[id] = instance;
  }

  /**
   * Get sidenav
   *
   * @param id
   * @returns {any}
   */
  getSidenav(id): SidebarDirective {   console.log(this.sidenavInstances);
      return this.sidenavInstances[id];
  }
}
