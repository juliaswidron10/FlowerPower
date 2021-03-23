"use strict";

window.addEventListener("DOMContentLoaded", start);

let elementToPaint = undefined;

function start() {
  console.log("fiiiire");
  const urls = [
    "SVGs/background.svg",
    "SVGs/flower1-01.svg",
    "SVGs/flower2-01.svg",
    "SVGs/flower3-01.svg",
    "SVGs/flower4-01.svg",
    "SVGs/flower5-01.svg",
  ];
  urls.forEach((url) => {
    getSVG(url);
  });

  // const url = "SVGs/background.svg";
  // getSVG(url);

  colorButtons();
  color2Buttons();
  color3Buttons();
  fontButtons();
  featureButtons();
}

async function getSVG(url) {
  let response = await fetch(url);
  let svgData = await response.text();
  document.querySelector(".posterSVG").innerHTML += svgData;
  colorElements();
}

// .g-to-color a g-hez

// ...MODUL SELECTOR...
document.querySelector("#frame").addEventListener("click", showFrameModul);
document.querySelector("#colors").addEventListener("click", showColorModul);
document.querySelector("#flower").addEventListener("click", showFlowerModul);
document.querySelector("#text").addEventListener("click", showTextModul);
document.querySelector("#shapes").addEventListener("click", showShapesModul);

// document.querySelectorAll(".selector")
// for each
// add event listener
// e => e.target.addEventListener

function showFrameModul() {
  console.log("frammodul");
  document.querySelector("#frame").style.backgroundColor = "#505050";
  document.querySelector("#frame img").style.fill = "white";

  document.querySelector("#colors").style.backgroundColor = "white";
  document.querySelector("#colors img").style.fill = "#505050";

  document.querySelector(".frame-wrapper").classList.remove("hide");
  document.querySelector(".color-wrapper").classList.add("hide");
  document.querySelector(".flower-wrapper").classList.add("hide");
  document.querySelector(".shape-wrapper").classList.add("hide");
  document.querySelector(".text-wrapper").classList.add("hide");
}

function showColorModul() {
  document.querySelector("#colors").style.backgroundColor = "#505050";
  document.querySelector("#colors img").style.fill = "white";

  document.querySelector("#frame").style.backgroundColor = "white";
  document.querySelector("#frame img").style.fill = "#505050";

  document.querySelector(".color-wrapper").classList.remove("hide");
  document.querySelector(".frame-wrapper").classList.add("hide");
  document.querySelector(".flower-wrapper").classList.add("hide");
  document.querySelector(".shape-wrapper").classList.add("hide");
  document.querySelector(".text-wrapper").classList.add("hide");
}

function showFlowerModul() {
  // document.querySelector("#colors").style.backgroundColor = "#505050";
  // document.querySelector("#colors img").style.fill = "white";

  // document.querySelector("#frame").style.backgroundColor = "white";
  // document.querySelector("#frame img").style.fill = "#505050";

  document.querySelector(".flower-wrapper").classList.remove("hide");
  document.querySelector(".color-wrapper").classList.add("hide");
  document.querySelector(".frame-wrapper").classList.add("hide");
  document.querySelector(".shape-wrapper").classList.add("hide");
  document.querySelector(".text-wrapper").classList.add("hide");
}

function showTextModul() {
  // document.querySelector("#colors").style.backgroundColor = "#505050";
  // document.querySelector("#colors img").style.fill = "white";

  // document.querySelector("#frame").style.backgroundColor = "white";
  // document.querySelector("#frame img").style.fill = "#505050";

  document.querySelector(".text-wrapper").classList.remove("hide");
  document.querySelector(".flower-wrapper").classList.add("hide");
  document.querySelector(".color-wrapper").classList.add("hide");
  document.querySelector(".frame-wrapper").classList.add("hide");
  document.querySelector(".shape-wrapper").classList.add("hide");
}

function showShapesModul() {
  // document.querySelector("#colors").style.backgroundColor = "#505050";
  // document.querySelector("#colors img").style.fill = "white";

  // document.querySelector("#frame").style.backgroundColor = "white";
  // document.querySelector("#frame img").style.fill = "#505050";

  document.querySelector(".shape-wrapper").classList.remove("hide");
  document.querySelector(".text-wrapper").classList.add("hide");
  document.querySelector(".flower-wrapper").classList.add("hide");
  document.querySelector(".color-wrapper").classList.add("hide");
  document.querySelector(".frame-wrapper").classList.add("hide");
}

const settings = {
  colors: [
    "#A0DEDD",
    "#FFC9CD",
    "#C7CFE4",
    "#FFD5AF",
    "#BDBEBD",
    "#FFFCA4",
    "#C3F6DE",
    "#E6A2CB",
    "#95BC95",
    "#629594",
    "#7D8BB1",
    "#7B7B7B",
  ],

  colors2: ["#629594", "#7D8BB1", "#7B7B7B"],

  colors3: ["#A0DEDD", "#FFC9CD", "#C7CFE4", "#FFD5AF"],

  fonts: ["Arial", "Montserrat"],
};

const templates = {
  colorItem: document.querySelector(".t-color").content,
  colorItem2: document.querySelector(".t-color2").content,
  colorItem3: document.querySelector(".t-color3").content,
  // fontItem: document.querySelector(".t-font").content,
};

// ...font & text...

// document.querySelector("#font-save-button").addEventListener("click", showText);
const textOutput = document.querySelector("#textOutput");

function showText() {
  console.log("textoutput launched");

  const textInput = document.querySelector("#lText").value;

  textOutput.value = textInput;
  textOutput.innerHTML = textInput;
}

function fontButtons() {
  showFontButtons();
  // startFontButtons();

  function showFontButtons() {
    settings.fonts.forEach((font) =>{

      let selection = document.querySelector("#fonts");
      let option = document.createElement("option");
      option.value = font;
      option.text = font;
      selection.appendChild(option);
      
    })
  }
}

function textSaved() {
  let month = document.querySelector("#textmonth");
  let day = document.querySelector("#textday");
  let quote = document.querySelector("#textquote");
  let longtext = document.querySelector("#textlong");
  let fontContainer = document.querySelector(".text-wrapper hide");
  month.textContent = pickmonth.value;
  day.textContent = pickday.value;
  quote.textContent = pickquote.value;
  longtext.textContent = picklong.value;
  fontContainer.style.fontFamily = option.value;
}
// ...color buttons...

function colorButtons() {
  showColorButtons();
  startColorButtons();

  function showColorButtons() {
    const colorPicker = document.querySelector(".js-color-picker");
    const templateColor = templates.colorItem;

    settings.colors.forEach((color) => {
      const clone = templateColor.cloneNode(true);

      clone.querySelector(".c-color-picker__color").setAttribute("data-color", color);
      clone.querySelector(".c-color-picker__color-inner").style.backgroundColor = color;

      if (color === settings.pickedColor) {
        clone.querySelector(".c-color-picker__color").classList.add("is-active");
      }

      colorPicker.appendChild(clone);
    });
  }

  function startColorButtons() {
    const colorButtons = document.querySelectorAll(".c-color-picker__color");

    colorButtons.forEach((colorButton) => {
      colorButton.addEventListener("click", clickColor);
    });
  }

  function clickColor() {
    const clickedColorButton = this;
    console.log(clickedColorButton.dataset.color);
    console.log("clicked button", clickedColorButton);
    const clickedColorButtonInner = clickedColorButton.querySelector(".c-color-picker__color-inner");

    if (elementToPaint === undefined) {
      alert("In order to color your poster, select an element first! ;)");
    } else {
      const start = clickedColorButtonInner.getBoundingClientRect();
      const end = elementToPaint.getBoundingClientRect();

      const elementHeight = end.height / 2;
      console.log(elementHeight);

      const elementWidth = end.width / 2;

      const diffX = end.x - start.x + elementWidth;
      console.log(diffX);
      const diffY = end.y - start.y + elementHeight;
      console.log(diffY);

      clickedColorButtonInner.style.setProperty("--diffX", diffX);
      clickedColorButtonInner.style.setProperty("--diffY", diffY);
      clickedColorButtonInner.classList.add("animate-color-in");

      clickedColorButtonInner.addEventListener("animationend", animateColor);
      // TODO:
      // document.querySelector(".c-color-picker__color").classList.add("animate-color-scale");

      function animateColor() {
        clickedColorButtonInner.classList.remove("animate-color-in");
        clickedColorButtonInner.removeEventListener("animationend", animateColor);
        elementToPaint.style.fill = clickedColorButton.dataset.color;
      }
    }

    settings.pickedColor = clickedColorButton.dataset.color;

    // TODO:
    // const findLatestClickedColor = document.querySelector(".c-color-picker__color.is-active");
    // if (findLatestClickedColor) {
    //     findLatestClickedColor.classList.remove("is-active");
    // }
    // clickedColorButton.classList.add("is-active");
  }
}

// coloring
function colorElements() {
  const groups = document.querySelectorAll(".g-to-color");
  console.log(groups);
  groups.forEach((group) => {
    group.addEventListener("click", storeElement);
    // group.style.fill = "#fff";

    function storeElement() {
      groups.forEach((group) => {
        group.classList.remove("g-to-color_active");
      });
      elementToPaint = group;
      group.classList.add("g-to-color_active");
      group.addEventListener("click", toggleActive);

      console.log(group);
    }

    function toggleActive() {
      group.classList.remove("g-to-color_active");
      group.removeEventListener("click", toggleActive);
      elementToPaint = undefined;
    }
  });
}

function color2Buttons() {
  showColor2Buttons();
  startColor2Buttons();

  function showColor2Buttons() {
    const colorPicker = document.querySelector(".js-color-picker2");
    const templateColor = templates.colorItem2;

    settings.colors2.forEach((color) => {
      const clone = templateColor.cloneNode(true);

      clone.querySelector(".c-color-picker__color2").setAttribute("data-color", color);
      clone.querySelector(".c-color-picker__color-inner2").style.backgroundColor = color;

      if (color === settings.pickedColor) {
        clone.querySelector(".c-color-picker__color2").classList.add("is-active");
      }

      colorPicker.appendChild(clone);
    });
  }

  function startColor2Buttons() {
    const colorButtons = document.querySelectorAll(".c-color-picker__color2");

    colorButtons.forEach((colorButton) => {
      colorButton.addEventListener("click", clickColor2);
    });
  }

  function clickColor2() {
    const clickedColorButton = this;
    console.log(clickedColorButton.dataset.color);
    console.log("clicked button", clickedColorButton);
    const clickedColorButtonInner = clickedColorButton.querySelector(".c-color-picker__color-inner2");

    if (elementToPaint === undefined) {
      console.log("no element is chosen");
    } else {
      const start = clickedColorButtonInner.getBoundingClientRect();
      const end = elementToPaint.getBoundingClientRect();

      const elementHeight = end.height / 2;
      console.log(elementHeight);

      const elementWidth = end.width / 2;

      const diffX = end.x - start.x + elementWidth;
      console.log(diffX);
      const diffY = end.y - start.y + elementHeight;
      console.log(diffY);

      clickedColorButtonInner.style.setProperty("--diffX", diffX);
      clickedColorButtonInner.style.setProperty("--diffY", diffY);
      clickedColorButtonInner.classList.add("animate-color-in");

      clickedColorButtonInner.addEventListener("animationend", animateColor2);
      // TODO:
      // document.querySelector(".c-color-picker__color").classList.add("animate-color-scale");

      function animateColor2() {
        clickedColorButtonInner.classList.remove("animate-color-in");
        clickedColorButtonInner.removeEventListener("animationend", animateColor2);
        elementToPaint.style.fill = clickedColorButton.dataset.color;
      }
    }

    settings.pickedColor = clickedColorButton.dataset.color;

    // TODO:
    // const findLatestClickedColor = document.querySelector(".c-color-picker__color.is-active");
    // if (findLatestClickedColor) {
    //     findLatestClickedColor.classList.remove("is-active");
    // }
    // clickedColorButton.classList.add("is-active");
  }
}

function color3Buttons() {
  showColor3Buttons();
  startColor3Buttons();

  function showColor3Buttons() {
    const colorPicker = document.querySelector(".js-color-picker3");
    const templateColor = templates.colorItem3;

    settings.colors3.forEach((color) => {
      const clone = templateColor.cloneNode(true);

      clone.querySelector(".c-color-picker__color3").setAttribute("data-color", color);
      clone.querySelector(".c-color-picker__color-inner3").style.backgroundColor = color;

      if (color === settings.pickedColor) {
        clone.querySelector(".c-color-picker__color3").classList.add("is-active");
      }

      colorPicker.appendChild(clone);
    });
  }

  function startColor3Buttons() {
    const colorButtons = document.querySelectorAll(".c-color-picker__color3");

    colorButtons.forEach((colorButton) => {
      colorButton.addEventListener("click", clickColor3);
    });
  }

  function clickColor3() {
    const clickedColorButton = this;
    console.log(clickedColorButton.dataset.color);
    console.log("clicked button", clickedColorButton);
    const clickedColorButtonInner = clickedColorButton.querySelector(".c-color-picker__color-inner3");

    if (elementToPaint === undefined) {
      console.log("no element is chosen");
    } else {
      const start = clickedColorButtonInner.getBoundingClientRect();
      const end = elementToPaint.getBoundingClientRect();

      const elementHeight = end.height / 3;
      console.log(elementHeight);

      const elementWidth = end.width / 3;

      const diffX = end.x - start.x + elementWidth;
      console.log(diffX);
      const diffY = end.y - start.y + elementHeight;
      console.log(diffY);

      clickedColorButtonInner.style.setProperty("--diffX", diffX);
      clickedColorButtonInner.style.setProperty("--diffY", diffY);
      clickedColorButtonInner.classList.add("animate-color-in");

      clickedColorButtonInner.addEventListener("animationend", animateColor3);
      // TODO:
      // document.querySelector(".c-color-picker__color").classList.add("animate-color-scale");

      function animateColor3() {
        clickedColorButtonInner.classList.remove("animate-color-in");
        clickedColorButtonInner.removeEventListener("animationend", animateColor3);
        elementToPaint.style.fill = clickedColorButton.dataset.color;
      }
    }

    settings.pickedColor = clickedColorButton.dataset.color;

    // TODO:
    // const findLatestClickedColor = document.querySelector(".c-color-picker__color.is-active");
    // if (findLatestClickedColor) {
    //     findLatestClickedColor.classList.remove("is-active");
    // }
    // clickedColorButton.classList.add("is-active");
  }
}

// coloring
// function colorElements() {
//   const groups = document.querySelectorAll(".g-to-color");
//   console.log(groups);
//   groups.forEach((group) => {
//     group.addEventListener("click", storeElement);
//     // group.style.fill = "#fff";

//     function storeElement() {
//       groups.forEach((group) => {
//         group.classList.remove("g-to-color_active");
//       });
//       elementToPaint = group;
//       group.classList.add("g-to-color_active");
//       group.addEventListener("click", toggleActive);

//       console.log(group);
//     }

//     function toggleActive() {
//       group.classList.remove("g-to-color_active");
//       group.removeEventListener("click", toggleActive);
//       elementToPaint = undefined;
//     }
//   });
// }

// //----------FEATURE FUNCTION---------------
// // The model of all features
const features = {
  frame: false,
  flower1: false,
  flower2: false,
  flower3: false,
  flower4: false,
  flower5: false,
  leaf1: false,
  leaf2: false,
  leaf3: false,
  shape: false,
};

function featureButtons() {
  document.querySelectorAll(".option").forEach((option) => option.addEventListener("click", toggleOption));
  // document.querySelectorAll(".option").forEach((id) => id.addEventListener("click", selectOnlyOne(id)));
}

// selectOnlyOne();

// function selectOnlyThis(id) {
//   console.log("megy?");
//   for (var i = 1; i <= 5; i++) {
//     document.getElementById("option" + i).selected = false;
//     if (document.getElementById("option" + i).selected === false) {
//       document.getElementById("option" + i).classList.add("hide");
//     } else {
//       document.getElementById("option" + i).classList.remove("hide");
//     }
//   }
//   document.getElementById(id).selected = true;
// }

function toggleOption(event) {
  console.group("togggle");
  const target = event.currentTarget;
  const feature = target.dataset.feature;

  //Takes the state of the feature and makes it reverse aka toogle
  features[feature] = !features[feature];

  //Features feature is true
  if (features[feature]) {
    // feature added
    console.log(`Feature ${feature} is turned on!`);

    // If feature is (now) turned on:
    target.classList.add("chosen");

    // - un-hide the feature-layer(s) in the #product-preview;
    console.log(`.posterSVG [data-feature=${feature}]`);
    document.querySelector(`.posterSVG [data-feature=${feature}]`).classList.remove("hide");
  } else {
    // feature removed
    console.log(`Feature ${feature} is turned off!`);

    // Else - if the feature (became) turned off:
    // - no longer mark target as chosen
    target.classList.remove("chosen");
    // - hide the feature-layer(s) in the #product-preview
    document.querySelector(`.posterSVG [data-feature=${feature}]`).classList.add("hide");
  }
}
