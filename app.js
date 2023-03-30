"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const character = await getCharacter();
  character.forEach(showCharacter);
}

async function getCharacter() {
  const response = await fetch("data/southpark.json");
  const data = await response.json();
  return data;
}

function showCharacter(person) {
  const HTML =
    /*html*/
    `
    <article class="grid-item">
    <img src="${person.image}"">
    <h1><span>${person.name}</span></h1>
    <p><strong>Aka: </strong><span>${person.nickname}</span></spa></p>
    </article>
      `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", HTML);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialogue-image").src = person.image;
    document.querySelector("#dialogue-name").textContent = person.name;
    document.querySelector("#dialogue-nickname").textContent = person.nickname;
    document.querySelector("#dialogue-occupation").textContent = person.occupation;
    document.querySelector("#dialogue-voicedby").textContent = person.voicedBy;
    document.querySelector("#dialogue-age").textContent = person.age;
    document.querySelector("#dialogue-gender").textContent = person.gender;
    document.querySelector("#dialogue-religion").textContent = person.religion;
    document.querySelector("#dialogue-hair").textContent = person.hairColor;
    document.querySelector("#dialogue-schoolgrade").textContent = person.schoolGrade;
    document.querySelector("#dialogue-episodes").textContent = person.episodes;
    document.querySelector("#dialogue-appearances").textContent = person.appearances;
    document.querySelector("#dialogue-firstAppearance").textContent = person.firstAppearance;
    document.querySelector("#dialogue").showModal();
  }
}
