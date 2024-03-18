const box = document.querySelector("#box"),
  buttons = document.querySelectorAll("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart");

//! Box
// box.style.backgroundColor = "gray";
// box.style.width = "100px";
// box.style.height = "100px";

//! Buttons
// buttons[0].style.backgroundColor = "green";
// buttons[0].style.color = "orange";

//! Circles, set style by default
// circles[3].style.borderRadius = "0";

//! Set style by using cssText
// circles[1].style.cssText = "background-color: red";

//! for loop
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].style.borderRadius = "0";
// }

// for (let i = 0; i < circles.length; i++) {
//   if (circles[i].textContent == "A") {
//     circles[i].style.display = "none";
//   } else {
//     circles[i].style.borderRadius = "0";
//   }
// }

//! NodeList with forEach
// buttons.forEach((elem) => {
//   return (elem.style.borderRadius = "100px");
// });

//! createElement
const div = document.createElement("div");
div.style.width = "400px";
div.style.height = "200px";
div.style.backgroundColor = "green";

document.querySelector(".app").append(div);

// div.innerHTML = "<h2>Hello everyone</h2>";
// div.textContent = "Bye world!";
div.insertAdjacentHTML("afterend", "<h1>Hello everyone</h1>");

// div.classList.add("heart");
// div.style.backgroundColor = "black";

// wrapper.appendChild(div);
// wrapper.prepend(div);

// circles[0].remove();
// hearts[0].replaceWith(circles[1]);
