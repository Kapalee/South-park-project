"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const character = await getCharacter();
  character.forEach(showCharacter);
}

async function getCharacter(url) {
  const response = await fetch(url);
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
  document.querySelector("#characters").insertAdjacentHTML("beforeend");
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialogue-name").textContent = person.name;
    document.querySelector("#dialogue-nickname").textContent = person.nickname;
    document.querySelector("#dialogue-occupation").textContent = person.occupation;
    document.querySelector("#dialogue-voice").textContent = person.voicedBy;
    document.querySelector("#dialogue-age").textContent = person.age;
    document.querySelector("#dialogue-gender").textContent = person.gender;
    document.querySelector("#dialogue-eye").textContent = person.eyeColor;
    document.querySelector("#dialogue-hair").textContent = person.hairColor;
    document.querySelector("#dialogue-phrase").textContent = person.catchPhrase;
    document.querySelector("#dialogue-appearance").textContent = person.firstAppearance;
    document.querySelector("#dialogue-religion").textContent = person.religion;
    document.querySelector("#dialogue").showModal();
  }
}

function showCharacterModal(list) {
  showCharacter(person);
}
function showDialog(person) {}

function closeDialog() {}
