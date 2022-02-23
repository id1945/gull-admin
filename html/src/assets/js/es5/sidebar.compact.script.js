"use strict";

$(document).ready(function () {
  "use strict";

  var $appAdminWrap = $(".app-admin-wrap.layout-sidebar-compact");

  var $sidebarToggle = $appAdminWrap.find(".menu-toggle");
  var $sidebarLeft = $appAdminWrap.find(".sidebar-left");
  var $sidebarLeftSecondary = $appAdminWrap.find(".sidebar-left-secondary");
  var $sideNavItem = $appAdminWrap.find(".nav-item");

  function navItemToggleActive($activeItem) {
    var $navItem = $(".nav-item");
    $navItem.removeClass("active");
    $activeItem.addClass("active");
  }

  function initLayout() {
    // Makes secondary menu selected on page load
    $sideNavItem.each(function (index) {
      var $item = $(this);
      if ($item.hasClass("active")) {
        var dataItem = $item.data("item");
        console.log(dataItem);

        $sidebarLeftSecondary.find("[data-parent=\"" + dataItem + "\"]").show();
      }
    });
    if (gullUtils.isMobile()) {
      $appAdminWrap.removeClass("sidenav-open");
    }
  }

  $(window).on("resize", function (event) {
    if (gullUtils.isMobile()) {
      $appAdminWrap.removeClass("sidenav-open");
    }
  });

  initLayout();

  // Show Secondary menu area on hover on side menu item;
  $sidebarLeft.find(".nav-item").on("mouseenter", function (event) {
    var $navItem = $(event.currentTarget);
    var dataItem = $navItem.data("item");

    if (dataItem) {
      console.log(dataItem);
      navItemToggleActive($navItem);
      $sidebarLeftSecondary.find(".submenu-area").hide();
      $sidebarLeftSecondary.find("[data-parent=\"" + dataItem + "\"]").show();
    }
  });

  // Prevent opeing link if has data-item
  $sidebarLeft.find(".nav-item").on("click", function (e) {
    var $navItem = $(event.currentTarget);
    var dataItem = $navItem.data("item");
    if (dataItem) {
      e.preventDefault();
    }
  });

  // Toggle menus on click on header toggle icon
  $sidebarToggle.on("click", function (event) {
    $appAdminWrap.toggleClass("sidenav-open");
  });

  $('.sidebar-close').on('click', function (e) {
    $appAdminWrap.removeClass("sidenav-open");
  });
});