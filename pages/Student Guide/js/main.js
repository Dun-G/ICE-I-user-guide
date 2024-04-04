(function ($) {
  "use strict";

  // Smooth scrolling on the navbar links
  $(".offcanvas a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 45,
        },
        500,
        "easeInOutExpo"
      );

      if ($(this).parents(".offcanvas").length) {
        $(".offcanvas .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "easeInOutExpo");
    return false;
  });

  // Pause all videos on page load
  $(window).on("load", function () {
    var videos = document.querySelectorAll("iframe");
    videos.forEach(function (video) {
      video.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  });

  // Hide the loader when the page content has loaded
  $(".loader-container").fadeOut("slow", function () {
    // Enable clicking on content after loader is hidden
    $(".content").css("pointer-events", "auto");
  });
})(jQuery);
