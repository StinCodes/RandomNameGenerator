import { namesOne, namesTwo } from "./names.js";

const initApp = () => {
  document.getElementById("submitForm").addEventListener("submit", (e) => {
    //prevent page refresh on form submit
    e.preventDefault();
    //clear out previous suggestions
    clearSuggestions();
    //generate names
    const namesArray = generateNames();
    console.log(namesArray);
    //display names
  });
};

document.addEventListener("DOMContentLoaded", initApp);

const clearSuggestions = () => {
  const display = document.getElementById("suggestionSection");
  //add hidden if display not hidden
  if (!display.classList.contains("hidden")) {
    display.classList.toggle("hidden");
  }
  const list = document.querySelector(".suggestionSection ol");
  list.innerHTML = "";
};

const generateNames = () => {
  const randomNumArr = [];
  for (let i = 0; i < 4; ) {
    const randomNum = Math.floor(Math.random() * 10);
    if (randomNumArr.includes(randomNum)) {
      continue;
    }
    randomNumArr.push(randomNum);
    i++;
  }
  console.log(randomNumArr);
  const suggestion1 = namesOne[randomNumArr[0]] + namesTwo[randomNumArr[3]];
  const suggestion2 = namesOne[randomNumArr[1]] + namesTwo[randomNumArr[0]];
  const suggestion3 = namesOne[randomNumArr[2]] + namesTwo[randomNumArr[2]];
  const suggestion4 = namesOne[randomNumArr[3]] + namesTwo[randomNumArr[1]];

  return [suggestion1, suggestion2, suggestion3, suggestion4];
};

const displayNames = (namesArray) => {
  const list = document.querySelector(".suggestionSection ol");
  const firstName = document.getElementById("submitSection__textInput").value;
  namesArray.forEach((name) => {
    list.innerHTML += `<li>
    <a href="https://youtube.com/${name}" target="_blank">${name}</a></li>`;
    list.innerHTML += `<ul>
    <li><a href="<a href="https://youtube.com/${firstName}s${name}" target="_blank">${firstName}s${name}</a></li>
    <li><a href="<a href="https://youtube.com/${name}With${firstName}" target="_blank">${firstName}s${name}</a></li>
    `
  });
};
