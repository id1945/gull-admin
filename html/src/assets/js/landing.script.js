$(document).ready(function() {
  feather.replace();

  // tab
  $tabCard = $(".feature-card");
  $tabCard.on("click", function() {
    $this = $(this);
    let tabId = $this.data("tab");

    $tabCard.removeClass("active");
    $this.addClass("active");

    $(".tab-panel").hide();
    $("#" + tabId).show();
  });

  $("#view_demo").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#demo").offset().top
      },
      400
    );
  });
});
