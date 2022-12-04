// fetch Masters object with vocal_members
// send to renderMembers, display

import { fetchClassList } from '../fetch-utils.js';
import { renderMembers } from '../render-utils.js';

/* Get DOM Elements */
const memberList = document.querySelector('#member-list');
/* Events */

/* Display Functions */

export async function displayClassList() {
    const param = new URLSearchParams(window.location.search);
    const master_id = param.get('id');

    const classList = await fetchClassList(master_id);
    console.log(classList, 'classList object');
    memberList.innerHTML = '';

    for (let member of classList) {
        console.log(member, 'member');

        // const memberEl = renderMembers(member);
        // memberList.append(memberEl);
    }
}

window.addEventListener('load', async () => {
    await displayClassList();
});
