import { get_all_svx } from '$lib/scripts/utils';
//import { lang } from '$lib/scripts/stores.js';


// let langVal;
// lang.subscribe(value => {
//     langVal = value;
// });

export async function load({ params }) {
    
    const articles = await get_all_svx("tutorials", params.lang || 'en');;
    return { articles };
}