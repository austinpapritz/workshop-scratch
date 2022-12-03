import { displayMasterClasses } from './app.js';
import { deleteMember } from './fetch-utils.js';

export function renderMasters(master) {
    const divEl = document.createElement('div');
    divEl.classList.add('card');
    divEl.classList.add(`${master.id}`);

    divEl.addEventListener('mouseover', () => {
        console.log('hover');
        // divEl.style.background('url(`../assets/${master.id}.jpg`)');
        divEl.addEventListener('click', () => {
            console.log(master.id);
        });
    });

    const genreEl = document.createElement('h2');
    genreEl.classList.add('genre');
    genreEl.textContent = master.genre;

    // const masterH3 = document.createElement('h3');
    // masterH3.textContent = master.name;

    // divEl.append(genreEl, masterH3);

    divEl.append(genreEl);
    return divEl;
}

export function renderMembers(member) {
    const memberDiv = document.createElement('div');

    const memberP = document.createElement('p');
    memberP.textContent = member.name;

    memberP.addEventListener('click', async () => {
        await deleteMember(member.id);
        displayMasterClasses();
    });

    memberDiv.append(memberP);
    return memberDiv;
}
