const promoAdvs = document.querySelectorAll(".promo__adv img"),
  promoGenre = document.querySelector(".promo__genre"),
  promoBgImg = document.querySelector(".promo__bg"),
  promoList = document.querySelector(".promo__interactive-list");
// remove advertising block
promoAdv.remove();

promoGenre.textContent = "Comedy";
promoBgImg.style.backgroundImage = "url('/Practice-dom/img/2.jpg')";
