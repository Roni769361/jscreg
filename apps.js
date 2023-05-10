const buttonReg = document.getElementById("buttonReg");
const form = document.getElementById("form");

buttonReg.addEventListener("click", () => {
  form.style.display = "block";
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  buttonReg.removeEventListener("click", arguments.callee);
});
