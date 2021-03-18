"use strict";

window.addEventListener("DOMContentLoaded", start);

let elementToPaint = undefined;

function start() {
  console.log("fiiiire");
  const urls = ["svg/car_config.svg", "svg/hot_rod_flames.svg", "svg/lips-01.svg"];
  urls.forEach((url) => {
    getSVG(url);
  });
  colorButtons();
  featureButtons();
}

async function getSVG(url) {
  let response = await fetch(url);
  let svgData = await response.text();
  document.querySelector(".carSVG").innerHTML += svgData;
  colorCar();
}

const settings = {
  colors: [
    "#FF0000",
    "#FF8000",
    "#FFFF00",
    "#00FF00",
    "#00FF80",
    "#00FFFF",
    "#0080FF",
    "#0000FF",
    "#8000FF",
    "#FF00FF",
    "#FF0080",
    "#FFFFFF",
  ],
};

const templates = {
  colorItem: document.querySelector(".t-color").content,
};

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
function colorCar() {
  const groups = document.querySelectorAll(".g-to-color");
  console.log(groups);
  groups.forEach((group) => {
    group.addEventListener("click", storeElement);
    group.style.fill = "#fff";

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

//----------FEATURE FUNCTION---------------
// The model of all features
const features = {
  gun: false,
  rims: false,
  lips: false,
  flames: false,
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
    document.querySelector(`.carSVG [data-feature=${feature}]`).classList.remove("hide");
  } else {
    // feature removed
    console.log(`Feature ${feature} is turned off!`);

    // Else - if the feature (became) turned off:
    // - no longer mark target as chosen
    target.classList.remove("chosen");
    // - hide the feature-layer(s) in the #product-preview
    document.querySelector(`.carSVG [data-feature=${feature}]`).classList.add("hide");
  }
}
