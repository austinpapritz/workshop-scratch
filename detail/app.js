// fetch Masters object with vocal_members
// send to renderMembers, display

import { fetchMaster } from '../fetch-utils.js';

/* Get DOM Elements */
const memberList = document.querySelector('#member-list');
/* Events */

/* Display Functions */

export async function displayClassList() {
    const param = new URLSearchParams(window.location.search);
    const id = param.get('id');

    const masterObject = await fetchMaster(id);
    console.log(masterObject, 'single master object');

    memberList.innerHTML = '';

    // for (let masterclass of masterclasses) {
    //     const masterEl = renderMasters(masterclass);

    // for (let member of masterclass.vocal_members) {
    //     const memberEl = renderMembers(member);
    //     masterEl.append(memberEl);
    //     memberList.append(masterEl);
    // }
    // memberList.append(masterEl);
    // }
}

window.addEventListener('load', async () => {
    await displayClassList();
});
