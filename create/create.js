// Add members

import { fetchMasters } from '../fetch-utils.js';

// DOM
const masterSelect = document.querySelector('#master-select');

// link supa to select
window.addEventListener('load', async () => {
    const masters = await fetchMasters();

    for (let master of masters) {
        const masterOption = document.createElement('option');
        masterOption.textContent = master.name;
        masterOption.value = master.id;
        masterSelect.append(masterOption);
    }
});
