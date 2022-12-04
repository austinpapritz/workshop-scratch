/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchMasters } from './fetch-utils.js';
import { renderMasters } from './render-utils.js';

/* Get DOM Elements */
const cardsContainer = document.querySelector('#cards-container');
/* Events */

/* Display Functions */

export async function displayMasterClasses() {
    const masterclasses = await fetchMasters();

    cardsContainer.innerHTML = '';

    for (let masterclass of masterclasses) {
        const masterEl = renderMasters(masterclass);

        cardsContainer.append(masterEl);
    }
}

window.addEventListener('load', async () => {
    await displayMasterClasses();
});
