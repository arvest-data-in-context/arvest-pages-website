import { get_all_svx } from '$lib/scripts/utils';

export async function load({ params }) {
    
    const tutorials = await get_all_svx("tutorials", params.lang || 'en');
    return { tutorials };
}