$(document).ready(function() {
  "use strict";
  var $sidebarToggle = $(".menu-toggle");
  var $sidebarLeft = $(".sidebar-left");
  var $sidebarLeftSecondary = $(".sidebar-left-secondary");
  var $sidebarOverlay = $(".sidebar-overlay");
  var $mainContentWrap = $(".main-content-wrap");
  var $sideNavItem = $(".nav-item");

  function openSidebar() {
    $sidebarLeft.addClass("open");
    $mainContentWrap.addClass("sidenav-open");
  }
  function closeSidebar() {
    $sidebarLeft.removeClass("open");
    $mainContentWrap.removeClass("sidenav-open");
  }
  function openSidebarSecondary() {
    $sidebarLeftSecondary.addClass("open");
    $sidebarOverlay.addClass("open");
  }
  function closeSidebarSecondary() {
    $sidebarLeftSecondary.removeClass("open");
    $sidebarOverlay.removeClass("open");
  }
  function openSidebarOverlay() {
    $sidebarOverlay.addClass("open");
  }
  function closeSidebarOverlay() {
    $sidebarOverlay.removeClass("open");
  }
  function navItemToggleActive($activeItem) {
    var $navItem = $(".nav-item");
    $navItem.removeClass("active");
    $activeItem.addClass("active");
  }

  function initLayout() {
    // Makes secondary menu selected on page load
    $sideNavItem.each(function(index) {
      let $item = $(this);
      if ($item.hasClass("active")) {
        let dataItem = $item.data("item");
        $sidebarLeftSecondary.find(`[data-parent="${dataItem}"]`).show();
      }
    });
    if (gullUtils.isMobile()) {
      closeSidebar();
      closeSidebarSecondary();
    }
  }

  $(window).on("resize", function(event) {
    if (gullUtils.isMobile()) {
      closeSidebar();
      closeSidebarSecondary();
    }
  });

  initLayout();

  // Show Secondary menu area on hover on side menu item;
  $sidebarLeft.find(".nav-item").on("mouseenter", function(event) {
    let $navItem = $(event.currentTarget);
    let dataItem = $navItem.data("item");

    if (dataItem) {
      navItemToggleActive($navItem);
      openSidebarSecondary();
    } else {
      closeSidebarSecondary();
    }
    $sidebarLeftSecondary.find(".childNav").hide();
    $sidebarLeftSecondary.find(`[data-parent="${dataItem}"]`).show();
  });

  // Prevent opeing link if has data-item
  $sidebarLeft.find(".nav-item").on("click", function(e) {
    let $navItem = $(event.currentTarget);
    let dataItem = $navItem.data("item");
    if (dataItem) {
      e.preventDefault();
    }
  });

  // Hide secondary menu on click on overlay
  $sidebarOverlay.on("click", function(event) {
    if (gullUtils.isMobile()) {
      closeSidebar();
    }
    closeSidebarSecondary();
  });
  

  // Toggle menus on click on header toggle icon
  $sidebarToggle.on("click", function(event) {
    let isSidebarOpen = $sidebarLeft.hasClass("open");
    let isSidebarSecOpen = $sidebarLeftSecondary.hasClass("open");
    let dataItem = $(".nav-item.active").data("item");
    if (isSidebarOpen && isSidebarSecOpen && gullUtils.isMobile()) {
      closeSidebar();
      closeSidebarSecondary();
    } else if (isSidebarOpen && isSidebarSecOpen) {
      closeSidebarSecondary();
    } else if (isSidebarOpen) {
      closeSidebar();
    } else if (!isSidebarOpen && !isSidebarSecOpen && !dataItem) {
      openSidebar();
    } else if (!isSidebarOpen && !isSidebarSecOpen) {
      openSidebar();
      openSidebarSecondary();
    }
  });
});
