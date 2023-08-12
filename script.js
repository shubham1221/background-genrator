var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gredient");

function setGredient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGredient);
color2.addEventListener("input", setGredient);

// only for learn dont use oninput becoause of sapration of concers
// <input
//       oninput="setGredient()"
//       class="color1"
//       type="color"
//       name="color1"
//       value="#00ff00"
//     />
//     <input
//       oninput="setGredient()"
//       class="color2"
//       type="color"
//       name="color2"
//       value="#ff0000"
//     />
