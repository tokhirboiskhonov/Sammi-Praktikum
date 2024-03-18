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

// 2-version

// let seriesArr = [
// 	"OMAR",
// 	"The Final Legacy",
// 	"ERTUGRUL",
// 	"MAGNIFICENT CENTURY",
// 	"GREAT SELJUKS: GUARDIANS...",
//  ],

// let itemCount = 0;

// for (let item of seriesArr) {
//   let li = document.createElement("li");
//   li.classList.add("promo__interactive-item");
//   li.textContent = `${++itemCount} ${item}`;

//   //   itemCount++;
//   promoList.append(li);
//   console.log(itemCount);
// }

// let hoverLi = document.querySelectorAll(".promo__interactive-item");

// hoverLi.forEach((li) => {
//   li.addEventListener("mouseover", () => {
//     let delBtn = document.createElement("div");
//     delBtn.classList.add("delete");
//     li.append(delBtn);
//   });

//   // Add a mouseout event listener
//   li.addEventListener("mouseout", () => {
//     // Remove the delete button when mouseout occurs
//     let delBtn = li.querySelector(".delete");
//     if (delBtn) {
//       delBtn.remove();
//     }
//   });
// });
