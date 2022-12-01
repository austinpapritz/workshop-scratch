// Add members

import { fetchMasters } from '../fetch-utils.js';

// link supa to select
window.addEventListener('load', async () => {
    await fetchMasters();
});
