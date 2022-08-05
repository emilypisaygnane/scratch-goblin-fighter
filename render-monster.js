export function renderMonster(monsterData) {
    const monsterEl = document.createElement('div');
    const faceEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    monsterEl.classlist.add('monster');

    nameEl.textContent = monsterData.name;
    hpEl.textContent = monsterData.hp < 0 ? 0 : monsterData.hp;

    faceEl.src = monsterData.hp > 0 ? './assets/tom-nook.png' : './assets/tom-nook-money.png';

    if (monsterData.hp < 0) {
        monsterEl.classlist.add('money');
    }
    monsterEl.append(nameEl, faceEl, hpEl);

    return monsterEl;
}
