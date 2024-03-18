const promoAdvs = document.querySelectorAll(".promo__adv img"),
  promoGenre = document.querySelector(".promo__genre"),
  promoBgImg = document.querySelector(".promo__bg"),
  promoList = document.querySelector(".promo__interactive-list");
let seriesArr = {
  series: [
    "OMAR",
    "The Final Legacy",
    "ERTUGRUL",
    "MAGNIFICENT CENTURY",
    "GREAT SELJUKS: GUARDIANS...",
  ],
};
// remove advertising block
promoAdvs.forEach((item) => item.remove());

promoGenre.textContent = "Comedy";
promoBgImg.style.backgroundImage = "url('/Practice-dom/img/2.jpg')";

// 1-version
seriesArr.series.forEach((item, idx) => {
  promoList.innerHTML += `
	 <li class="promo__interactive-item">
	 ${++idx} ${item}
		 <div class="delete"></div>
	 </li>
	 `;
});
