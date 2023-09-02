const output = document.querySelector(".output input");
let process = "calculation";

function clr() {
  output.value = "";
}

function del() {
  if (process === "equal") clr();
  else output.value = output.value.slice(0, -1);
}

function calc() {
  try {
    output.value = eval(output.value);
  } catch {
    output.value = "INVALID";
  }
  process = "equal";
}

function insert(num) {
  if (process === "equal") clr();
  output.value += num;
  process = "calculation";
}

const Icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");
Icon.onclick = () => menu.classList.toggle("open");

const themes = ["blue", "orange", "red", "purple", "indigo"];
themes.forEach((theme) => {
  const themeButton = document.querySelector("." + theme);
  themeButton.onclick = () => {
    document.body.className = theme;
    menu.classList.remove("open");
  };
});