import { displayMasterClasses } from './app.js';
import { deleteMember } from './fetch-utils.js';

export function renderMasters(master) {
    const divEl = document.createElement('div');
    divEl.classList.add('card');

    const genreEl = document.createElement('h2');
    genreEl.classList.add('genre');
    genreEl.textContent = master.genre;

    const masterH3 = document.createElement('h3');
    masterH3.textContent = master.name;

    divEl.append(genreEl, masterH3);
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
