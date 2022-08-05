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