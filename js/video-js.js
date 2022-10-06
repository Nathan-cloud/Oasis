/*------ 11. Gallery Iostop Active ------*/
// images have loaded
$(".gallery-box").imagesLoaded(function () {
  // Isotop Active
  $(".gallery-menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Isotop Full Grid
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      columnWidth: 1,
    },
  });

  // Isotop Full Grid
  var $grid2 = $(".grid2").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });

  // Isotop Menu Active
  $(".gallery-menu li").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});

/*------ 15. Magnific Popup For Video ------*/
$(".popup-youtube").magnificPopup({
  type: "iframe",
});

$(".popup-gallery").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
});
