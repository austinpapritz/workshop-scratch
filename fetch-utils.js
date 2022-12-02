const SUPABASE_URL = 'https://dssscdbblqlagvgvvtkc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzc3NjZGJibHFsYWd2Z3Z2dGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwMTYsImV4cCI6MTk4MzY4NDAxNn0.ZLiT0DIvTuegM8zzRIvSgVzLLFRk-1PwYGXz7BhqKk4';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function createMember(member, master) {
    const response = await client.from('vocal_members').insert({ name: member, master_id: master });
    console.log(response, 'member response');
    return checkError(response);
}

export async function fetchMasters() {
    const response = await client.from('vocal_masters').select('*, vocal_members(*)');
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
