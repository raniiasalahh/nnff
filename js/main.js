const sr = scrollreveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".profile__border");
sr.reveal(".profile__name", { delay: 500 });
sr.reveal(".profile__profession", { delay: 600 });
sr.reveal(".profile__social", { delay: 700 });
sr.reveal(".profile__info-group", { interval: 100, delay: 700 });
sr.reveal(".profile__buttons", { delay: 800 });
sr.reveal(".profile__content", { delay: 900 });

let popup = document.getElementById("bx");
function openbx() {
  bx.classList.add("open-bx");
}
function closebx() {
  bx.classList.remove("open-bx");
}
