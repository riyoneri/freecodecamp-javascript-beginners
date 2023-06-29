const links = document.querySelectorAll("#link");
const btn = document.querySelector("button");
const main = document.querySelector("main");
const colorHolder = document.querySelector("#color__main");

const simpleColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "white",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "olive",
  "navy",
  "maroon",
  "gold",
  "silver",
  "indigo",
  "coral",
  "salmon",
  "turquoise",
  "violet",
  "orchid",
  "slategray",
  "plum",
  "lavender",
  "peru",
  "khaki",
  "peach",
  "aquamarine",
  "chartreuse",
  "crimson",
  "ivory",
  "rose",
  "azure",
];

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let activeLink = "simple";

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    
    links.forEach((link) => link.classList.remove("active"));

    event.target.classList.add("active");
    activeLink = event.target.textContent.toLowerCase();
  });
});

btn.addEventListener("click", () => {
  if (activeLink === "simple") {
    const randomIndex = Math.floor(Math.random() * simpleColors.length);
    main.style.backgroundColor = simpleColors[randomIndex];
    return (colorHolder.textContent = simpleColors[randomIndex]);
  }

  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexColors.length);
    randomColor += hexColors[randomIndex];
  }

  main.style.backgroundColor = randomColor;
  colorHolder.textContent = randomColor;
});
