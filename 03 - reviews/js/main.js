const data = [
  {
    names: "John Smith",
    title: "Front-end Developer",
    description:
      "Passionate front-end developer with expertise in HTML, CSS, and JavaScript.",
    image: "img/image_1.jpg",
  },
  {
    names: "Sarah Johnson",
    title: "UI/UX Designer",
    description:
      "Creative UI/UX designer with a focus on crafting engaging user experiences.",
    image: "img/image_2.jpg",
  },
  {
    names: "Michael Brown",
    title: "Backend Developer",
    description:
      "Experienced backend developer specializing in building robust server-side applications.",
    image: "img/image_3.jpg",
  },
  {
    names: "Emma Davis",
    title: "Data Analyst",
    description:
      "Data analyst skilled in gathering, analyzing, and interpreting complex datasets.",
    image: "img/image_4.jpg",
  },
  {
    names: "Jane Smith",
    title: "Front-end Developer",
    description:
      "Front-end developer skilled in HTML, CSS, and JavaScript. Loves creating intuitive user interfaces.",
    image: "img/image_5.jpg",
  },
  {
    names: "Mike Johnson",
    title: "Full-stack Developer",
    description:
      "Full-stack developer proficient in various frameworks and technologies. Enjoys tackling complex problems.",
    image: "img/image_6.jpg",
  },
  {
    names: "Sarah Thompson",
    title: "UI/UX Designer",
    description:
      "Passionate UI/UX designer with a focus on creating visually appealing and user-friendly interfaces.",
    image: "img/image_7.jpg",
  },
  {
    names: "David Brown",
    title: "Backend Developer",
    description:
      "Backend developer specialized in building scalable and efficient server-side applications.",
    image: "img/image_8.jpg",
  },
  {
    names: "Emily Wilson",
    title: "Mobile App Developer",
    description:
      "Mobile app developer experienced in creating cross-platform applications using React Native.",
    image: "img/image_9.jpg",
  },
  {
    names: "Alexis Rodriguez",
    title: "Data Scientist",
    description:
      "Data scientist skilled in analyzing large datasets and deriving meaningful insights.",
    image: "img/image_10.jpg",
  },
  {
    names: "Michaela Davis",
    title: "Software Tester",
    description:
      "Software tester with a keen eye for detail and a passion for ensuring high-quality software.",
    image: "img/image_11.jpg",
  },
  {
    names: "Ryan Carter",
    title: "DevOps Engineer",
    description:
      "DevOps engineer experienced in implementing and maintaining continuous integration and deployment pipelines.",
    image: "img/image_12.jpg",
  },
];

const image = document.querySelector(".img");
const names = document.querySelector("#names");
const title = document.querySelector("#title");
const description = document.querySelector(".description");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const suppriseBtn = document.querySelector("button");

let currentIndex = 0;
let dataLength = data.length;

const setItems = (index) => {
  const selected = data[index];
  image.src = selected.image;
  names.textContent = selected.names;
  title.textContent = selected.title;
  description.textContent = selected.description;
};

document.addEventListener("DOMContentLoaded", () => {
  setItems(currentIndex);
});

leftBtn.addEventListener("click", () => {
  if (currentIndex - 1 < 0) currentIndex = dataLength;
  currentIndex -= 1;

  setItems(currentIndex);
});

rightBtn.addEventListener("click", () => {
  if (currentIndex + 1 == dataLength) currentIndex = -1;
  currentIndex += 1;

  setItems(currentIndex);
});

suppriseBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * dataLength);

  setItems(currentIndex);
});