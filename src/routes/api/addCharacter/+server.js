import { json } from '@sveltejs/kit';
import { equationObject, button } from '$lib/expression.js'
//import { equationCharacter } from '$route/Calculation.svelte'

export async function POST({ request }) {
	const { equationCharacter } = await request.json();
    const newCharacter = {
        char: equationCharacter
    };
    equationObject.push(newCharacter)

    //console.log(equationObject)
	return json(equationObject, { status: 201 });
}