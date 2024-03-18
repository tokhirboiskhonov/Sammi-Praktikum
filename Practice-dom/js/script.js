const promoAdv = document.querySelector(".promo__adv"),
  promoGenre = document.querySelector(".promo__genre"),
  promoBgImg = document.querySelector(".promo__bg");
// remove advertising block
promoAdv.remove();

promoGenre.textContent = "Comedy";
promoBgImg.style.backgroundImage = "url('/Practice-dom/img/2.jpg')";
