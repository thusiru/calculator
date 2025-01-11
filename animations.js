const buttonPressID = {
  Escape: ["#btn-ac", "grey-active"],
  " ": ["#btn-sign", "grey-active"],
  "%": ["#btn-modulo", "grey-active"],
  "/": ["#btn-devide", "orange-active"],
  "*": ["#btn-multiply", "orange-active"],
  "-": ["#btn-minus", "orange-active"],
  "+": ["#btn-plus", "orange-active"],
  Enter: ["#btn-equal", "orange-active"],
  1: ["#btn-1", "dark-active"],
  2: ["#btn-2", "dark-active"],
  3: ["#btn-3", "dark-active"],
  4: ["#btn-4", "dark-active"],
  5: ["#btn-5", "dark-active"],
  6: ["#btn-6", "dark-active"],
  7: ["#btn-7", "dark-active"],
  8: ["#btn-8", "dark-active"],
  9: ["#btn-9", "dark-active"],
  0: ["#btn-0", "dark-active"],
  ".": ["#btn-dot", "dark-active"],
};

const buttonClickID = {
  ".grey": "grey-active",
  ".dark": "dark-active",
  ".orange": "orange-active",
};

for (const [key, value] of Object.entries(buttonClickID)) {
  $(key).on("click", function () {
    showAnimation("#" + this.id, value);
  });
}

$(document).on("keydown", function (event) {
  if (Object.hasOwn(buttonPressID, event.key)) {
    showAnimation(buttonPressID[event.key][0], buttonPressID[event.key][1]);
  }
});

function showAnimation(button, buttonClass) {
  $(button).addClass(buttonClass);
  setTimeout(() => {
    $(button).removeClass(buttonClass);
  }, 100);

  const event = new CustomEvent("buttonPressed", { detail: button });
  document.dispatchEvent(event);
}
