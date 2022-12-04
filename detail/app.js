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
    memberList.innerHTML = '';

    const classlist = await fetchClassList(master_id);
    console.log(classlist, 'classList');

    for (let member of classlist.vocal_members) {
        console.log(member, 'member');

        const memberEl = renderMembers(member);
        memberList.append(memberEl);
    }
}

window.addEventListener('load', async () => {
    await displayClassList();
});
