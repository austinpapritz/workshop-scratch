/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { fetchMasters } from './fetch-utils.js';
import { renderMasters, renderMembers } from './render-utils.js';

/* Get DOM Elements */
const cardsContainer = document.querySelector('#cards-container');
/* Events */

/* Display Functions */
//error on homepage
//app.js:22 Uncaught (in promise) TypeError: masterclass is not iterable
//at displayMasterClasses (app.js:22:28)
//at async app.js:31:5
export async function displayMasterClasses() {
    const masterclasses = await fetchMasters();
    //the console log below returns the following:
    //Array(4)
    // 0
    // :
    // {id: 1, name: 'Aretha Franklin', genre: 'Soul', vocal_members: Array(6)}
    // 1
    // :
    // {id: 2, name: 'Luciano Pavarotti', genre: 'Opera', vocal_members: Array(4)}
    // 2
    // :
    // {id: 3, name: 'Freddie Mercury', genre: 'Rock', vocal_members: Array(5)}
    // 3
    // :
    // {id: 4, name: 'Bob Marley', genre: 'Reggae', vocal_members: Array(6)}
    // length
    // :
    // 4
    console.log(masterclasses, 'classes');
    cardsContainer.innerHTML = '';

    for (let masterclass of masterclasses) {
        //the console log below returns the following:
        // Objectgenre: "Soul"id: 1name: "Aretha Franklin"vocal_members: (6) [{…}, {…}, {…}, {…}, {…}, {…}][[Prototype]]: Object
        console.log(masterclass, 'masterclass');

        const masterEl = renderMasters(masterclass);

        for (let member of masterclass) {
            const memberEl = renderMembers(member);
            masterEl.append(memberEl);
            cardsContainer.append(masterEl);
        }
    }
}

window.addEventListener('load', async () => {
    await displayMasterClasses();
});
