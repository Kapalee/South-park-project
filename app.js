"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pcPrincipal = await getCharacter("data/pcPrincipal.json");
  showCharacter(pcPrincipal);
  console.log(pcPrincipal);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>${character.nickname}</p>
                <p>occupation: ${character.occupation}</p>
                <p>voiced by: ${character.voicedBy}</p>
                <p>age: ${character.age}</p>
                <p>gender: ${character.gender}</p>
                <p>eye color: ${character.eyeColor}</p>
                <p>hair color: ${character.hairColor}</p>
                <p>catch phrase: ${character.catchPhrase}</p>
                <p>first apperance: ${character.firstAppearance}</p>
                <p>religion: ${character.religion}</p>
                </article>
        `
  );
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialogue-name").textContent = character.name;
    document.querySelector("#dialogue-nickname").textContent = character.nickname;
    document.querySelector("#dialogue-occupation").textContent = character.occupation;
    document.querySelector("#dialogue-voice").textContent = character.voicedBy;
    document.querySelector("#dialogue-age").textContent = character.age;
    document.querySelector("#dialogue-gender").textContent = character.gender;
    document.querySelector("#dialogue-eye").textContent = character.eyeColor;
    document.querySelector("#dialogue-hair").textContent = character.hairColor;
    document.querySelector("#dialogue-phrase").textContent = character.catchPhrase;
    document.querySelector("#dialogue-appearance").textContent = character.firstAppearance;
    document.querySelector("#dialogue-religion").textContent = character.religion;
    document.querySelector("#dialogue").showModal();
  }
}
