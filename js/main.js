(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    var screenWidth = $(window).width(); // Mendapatkan lebar layar
    if (screenWidth >= 992) {
      $("#sidebar").toggleClass("active");
      if ($("#sidebar").hasClass("active")) {
        $("#content").css("margin-left", "0"); // Hapus margin saat sidebar tidak aktif
      } else {
        $("#content").css("margin-left", "280px"); // Tambah margin saat sidebar aktif
      }
    } else {
      $("#sidebar").toggleClass("active");
      if ($("#sidebar").hasClass("active")) {
        $("#content").css("margin-left", "0"); // Hapus margin saat sidebar tidak aktif
      } else {
        // $("#content").css("margin-left", "280px"); // Tambah margin saat sidebar aktif
      }
    }
  });
})(jQuery);
