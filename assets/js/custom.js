(function ($) {
  "use strict";
  jQuery(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("sticky-top");
    } else {
      $(".navbar-area").removeClass("sticky-top");
    }
  });
  $(".search-icon").on("click", function () {
    $(".search-form").toggle();
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    smartSpeed: 2000,
    dots: false,
  });
  $("#Container").mixItUp();
  $(".faq-area .open").click(function () {
    var container = $(this).parents(".topic");
    var answer = container.find(".answer");
    var trigger = container.find(".faq-t");
    answer.slideToggle(200);
    if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
    } else {
      trigger.addClass("faq-o");
    }
    if (container.hasClass("expanded")) {
      container.removeClass("expanded");
    } else {
      container.addClass("expanded");
    }
  });
  $(".popup-vimeo").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(".popup-gallery").magnificPopup({ type: "image" });
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }
  $(".newsletter-form").ajaxChimp({
    url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction,
  });
  $(window).on("load", function () {
    $(".loader-content").fadeOut(1000);
  });
})(jQuery);
