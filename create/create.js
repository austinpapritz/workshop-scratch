// Add members

import { createMember, fetchMasters, getUserID } from '../fetch-utils.js';

// DOM
const masterSelect = document.querySelector('#master-select');
const form = document.querySelector('#member-form');

// link supa to select
window.addEventListener('load', async () => {
    const masters = await fetchMasters();

    for (let master of masters) {
        const masterOption = document.createElement('option');
        masterOption.textContent = `${master.name} (${master.genre})`;
        masterOption.value = master.id;
        masterSelect.append(masterOption);
    }
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('member-name');
    const master = data.get('master-id');

    await createMember(name, master, getUserID());
    form.reset();
    window.location.href = `../detail/?id=${master}`;
});
