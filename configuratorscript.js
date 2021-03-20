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

  fonts: ["Arial", "Montserrat"],
};

const templates = {
  colorItem: document.querySelector(".t-color").content,
  fontItem: document.querySelector(".t-font").content,
};

// ...font & text...

document.querySelector("#font-save-button").addEventListener("click", showText);
const textOutput = document.querySelector("#textOutput");

function showText() {
  console.log("textoutput launched");

  const textInput = document.querySelector("#lText").value;

  textOutput.value = textInput;
  textOutput.innerHTML = textInput;
}

function fontButtons() {
  showFontButtons();
  startFontButtons();

  function showFontButtons() {
    const fontPicker = document.querySelector(".js-font-picker");
    const templateFont = templates.fontItem;

    settings.fonts.forEach((font) => {
      const clone = templateFont.cloneNode(true);

      clone.querySelector(".c-font-picker__font").setAttribute("data-font", font);
      // clone.querySelector(".c-font-picker__font-inner").style.backgroundFont = font;
      clone.querySelector(".c-font-picker__font-inner").innerHTML = font;

      if (font === settings.pickedFont) {
        clone.querySelector(".c-font-picker__font").classList.add("is-active");
      }

      fontPicker.appendChild(clone);
    });
  }

  function startFontButtons() {
    const fontButtons = document.querySelectorAll(".c-font-picker__font");

    fontButtons.forEach((fontButton) => {
      fontButton.addEventListener("click", clickFont);
    });
  }

  function clickFont() {
    const clickedFontButton = this;
    console.log(clickedFontButton.dataset.font);
    console.log("clicked button", clickedFontButton);
    const clickedFontButtonInner = clickedFontButton.querySelector(".c-font-picker__font-inner");

    // const start = clickedFontButtonInner.getBoundingClientRect();
    // const end = elementToPaint.getBoundingClientRect();

    // const elementHeight = end.height / 2;
    // console.log(elementHeight);

    // const elementWidth = end.width / 2;

    // const diffX = end.x - start.x + elementWidth;
    // console.log(diffX);
    // const diffY = end.y - start.y + elementHeight;
    // console.log(diffY);

    // clickedFontButtonInner.style.setProperty("--diffX", diffX);
    // clickedFontButtonInner.style.setProperty("--diffY", diffY);
    // clickedFontButtonInner.classList.add("animate-font-in");

    // clickedFontButtonInner.addEventListener("animationend", animateFont);
    // // TODO:
    // // document.querySelector(".c-font-picker__font").classList.add("animate-font-scale");

    // function animateFont() {
    //   clickedFontButtonInner.classList.remove("animate-font-in");
    //   clickedFontButtonInner.removeEventListener("animationend", animateFont);
    //   // TO DO:
    //   // text on poster to have the chosen font
    textOutput.style.fontFamily = clickedFontButton.dataset.font;
    // }

    settings.pickedFont = clickedFontButton.dataset.font;

    // TODO:
    // const findLatestClickedFont = document.querySelector(".c-font-picker__font.is-active");
    // if (findLatestClickedFont) {
    //     findLatestClickedFont.classList.remove("is-active");
    // }
    // clickedFontButton.classList.add("is-active");
  }
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
      console.log("no car part chosen");
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

//car coloring
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
}

function toggleOption(event) {
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
