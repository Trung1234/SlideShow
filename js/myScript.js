
// display the first image at the first time
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// control button event
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  // nếu qua 4 ảnh thì quay trở về ảnh ban đầu
  if (n > slides.length) 
  {
    slideIndex = 1;
  }
  // nếu về 0 thì quay về ảnh 4
  if (n < 1) 
  {
    slideIndex = slides.length;
  }
  // hide tất cả ảnh đi
  for (i = 0; i < slides.length; i++) {
      var id = "#img0"+i;
      $(id).hide();
  }
  // show ảnh theo index
  var currentId = "#img0"+(slideIndex-1);

  $(currentId).show();
  //$(currentId).slideUp();
}