var swiper = new Swiper(".okck-product-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
});

// change img filter when click on okck-product-color
$(".okck-product-color").click(function () {
  var img = $(this).find("img").attr("src");
  $(".okck-product-img").attr("src", img);
}).click();