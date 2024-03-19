// const btn = document.querySelector("button");
// const overlay = document.querySelector(".overlay");

// const cbFunc = (evt) => console.log(evt.currentTarget);

// overlay.addEventListener("click", cbFunc);

// btn.addEventListener("click", cbFunc);

// const clickBtn = (event, text) => {
//   event.target.textContent = text;
//   event.target.remove();
// };

// let count = 0;

// const delBtn = (evt) => {
//   count++;
//   if (count == 5) {
//     evt.target.remove();
//   }
//   console.log(count);
// };

// btn.addEventListener("click", (event) => clickBtn(event, "Hello World!"));

// btn.addEventListener("click", delBtn);
// btn.removeEventListener("click", delBtn);

// =====================
// const link = document.querySelector("a");

// link.addEventListener("click", (e) => {
//   e.preventDefault();

//   console.log("Click");
// });

// const btns = document.querySelectorAll("button");

// btns.forEach((item, idx) => {
//   item.addEventListener(
//     "click",
//     (e) => {
//       console.log(idx + 1);
//     },
//     { once: true }
//   );
// });

//*  --------------------------

const data = document.querySelector('[data-item="green"]');

// const body = document.body.childNodes;
const body = document.body.firstElementChild; // set first element in HTML
const body1 = document.body.lastChild; // set first element in HTML

// console.log(data.nextElementSibling);

console.log(body);
console.log(body1);
