var colorCodes = ['#99C3CC', '#CC9999', '#CB99CC', '#A6CC99'];

// create a function that will add colors to each product
function addColors(product, colorCodes) {
  var productColors = product.querySelector(".colors");
  var productColorSelectors = colorCodes.map(function(colorCode) {
    return `
      <span class="product-color">
        <span class="product-color-inner" data-color-hex-code="${colorCode}" style="background-color: ${colorCode}"></span>
      </span>
    `;
  }).join("");
  productColors.innerHTML = productColorSelectors;
  productColors.addEventListener("click", function(event) {
    var target = event.target;
    // get parent element of target
    var parent = target.parentElement;
    // add active class to parent element when clicked
    parent.classList.add("active");
    // remove active class from other elements
    var siblings = parent.parentElement.children;
    for (var i = 0; i < siblings.length; i++) {
      if (siblings[i] !== parent) {
        if (siblings[i].classList.contains("active")) {
          siblings[i].classList.remove("active");
        }
      }
    }

});
}

// add colors to productA
addColors(productA, colorCodes);
// add colors to productB
addColors(productB, colorCodes);
// add colors to productC
addColors(productC, colorCodes);


var swiper = new Swiper(".pSwiper", {
  slidesPerView: 2.4,
  spaceBetween: 12,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }, 
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
  },
});