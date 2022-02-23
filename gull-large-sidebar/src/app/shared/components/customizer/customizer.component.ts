import { Component, OnInit, OnDestroy } from "@angular/core";
import { NavigationService } from "../../services/navigation.service";
import { CustomizerService } from "../../services/customizer.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-customizer",
  templateUrl: "./customizer.component.html",
  styleUrls: ["./customizer.component.scss"]
})
export class CustomizerComponent implements OnInit, OnDestroy {
  isOpen: boolean = true;
  nav;
  layouts: any[];
  routeInterceptorSub: Subscription;
  colors = [];
  isRTL: boolean;
  constructor(
    public navService: NavigationService,
    public customizer: CustomizerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nav = [...this.navService.defaultMenu];
    this.layouts = this.customizer.layouts;
    this.colors = this.customizer.colors;

    if (!this.customizer.selectedLayout) {
      this.layouts.forEach(layout => {
        if (layout.active) {
          this.selectLayout(layout);
        }
      });
    }
    if (!this.customizer.selectedSidebarColor) {
      this.colors.forEach(color => {
        if (color.active) {
          this.selectSidebarColor(color);
        }
      });
    }
  }
  ngOnDestroy() {}

  selectLayout(selectedLayout) {
    this.customizer.selectedLayout = selectedLayout;
    this.customizer.modifySidebarUrls(this.nav, selectedLayout.name);
    // this.navService.menuItems.next(this.nav);
    this.changeLayoutRoute(selectedLayout.name);
    // reset color on layout change
    if (this.customizer.selectedSidebarColor) {
        this.selectSidebarColor(this.customizer.selectedSidebarColor);
    }
  }

  selectSidebarColor(color) {
    setTimeout(() => {
      let adminWrap = document.querySelector(".app-admin-wrap");
      let selectedColor = { ...this.customizer.selectedSidebarColor };
      this.customizer.removeClass(adminWrap, selectedColor.sidebarClass);
      this.customizer.addClass(adminWrap, color.sidebarClass);
      this.customizer.selectedSidebarColor = color;
    }, 40);
  }

  changeLayoutRoute(route) {
    let currentRoute = this.router.url;
    let changedRoute = this.customizer.replaceUrlString(route, currentRoute);
    this.router.navigateByUrl(changedRoute);
  }

  toggleDir() {
      this.customizer.toggleDir(this.isRTL);
  }
}
