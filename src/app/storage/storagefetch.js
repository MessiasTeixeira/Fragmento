const API_TOKEN = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1';

async function create(resource, data) {
    resource = `${API_URL}/${resource}`;

    const options = {
        method: "POST",
        headers: {
            apikey: API_TOKEN,
            Authorization: `Bearer ${API_TOKEN}`,
            Prefer: 'return=representation',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    const res = await fetch(resource, options);
    const createdData = await res.json();
    console.log(createdData);
    return createdData?.[0];
}
export { create };