import { renderFighter } from "./render-monster.js";
const defeatedNumberEl = document.querySelector('#defeated-number');
const fighterHPEl = document.querySelector('#fighter-hp');
const fighterImgEl = document.querySelector('#fighter-img');
const form = document.querySelector('form');
const fighterListEl = document.querySelector('.fighter');

let defeatedFighterCount = 0;
let playerHP = 15;
let monster = [
    { name: 'Tom Nook', hp: 8 },
    { name: 'Mr. Resetti', hp: 6 },
];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const monsterName = data.get('monster-name');

    const newMonster = {
        name: monsterName,
        hp: Math.ceil(Math.random() * 5),
    };

    monsters.push(newMonster);

    displayMonsters();
});

function displayMonsters() {
    monsterListEl.textContent = '';

    for (let monster of monster) {
        const monsterEl = renderMonster(monster);

        if(monster.hp > 0) {
          monsterEl.addEventListener('click', => {

            if (Math.random() < .33) {
              monster.hp--;
              alert('you hit ' + monster.name);
            } else {
              alert('you tried to hit ' + monster.name + ' but missed');
            }

            if (Math.random() < .5) {
              playerHP--;
              alert(monster.name + ' hit you');
            } else {
              alert(monster.name + 'tried to hit you but missed');
            }
            if (monster.hp === 0) {
              defeatedMonstersCount++;
            }
            if (playHP === 0) {
              adventureImgEl.classList.add('game-over')
              alert('Game-Over! You still owe Tom Nook money');
            }
            fighterHPEl.textContent = playerHP;
            defeatedNumberEl.textContent = defeatedMonstersCount;

            displayMonsters();
          })
        }
    }
}