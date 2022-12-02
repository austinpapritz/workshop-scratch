export function renderMasters(master) {
    const divEl = document.createElement('div');
    divEl.classList.add('card');

    const masterH3 = document.createElement('h3');
    masterH3.textContent = master.name;

    divEl.append(masterH3);
    return divEl;
}

export function renderMembers(member) {
    const memberDiv = document.createElement('div');

    const memberP = document.createElement('p');
    memberP.textContent = member.name;

    memberDiv.append(memberP);
    return memberDiv;
}
