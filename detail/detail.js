// fetch Masters object with vocal_members
// send to renderMembers, display

import { fetchClassList } from '../fetch-utils.js';
import { renderMembers } from '../render-utils.js';

/* Get DOM Elements */
const memberList = document.querySelector('#member-list');
/* Events */

/* Display Functions */
//below is console on detail/?id=1 page: WHY AM I GETTING ERROR AND ONE CONSOLE LOG FROM APP.JS ON DETAIL PAGE??
//(4) [{…}, {…}, {…}, {…}] app.js:35
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
//app.js:34 Uncaught (in promise) TypeError: Cannot set properties of null (setting 'innerHTML')
//at displayMasterClasses (app.js:34:30)
//at async app.js:51:5

export async function displayClassList() {
    const param = new URLSearchParams(window.location.search);
    const master_id = param.get('id');
    memberList.innerHTML = '';

    const classlist = await fetchClassList(master_id);

    for (let member of classlist[master_id - 1].vocal_members) {
        const memberEl = renderMembers(member);
        memberList.append(memberEl);
    }
}

window.addEventListener('load', async () => {
    await displayClassList();
});
