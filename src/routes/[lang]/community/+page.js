import { get_all_svx } from '$lib/scripts/utils';

export async function load({ params }) {
    
    const projects = await get_all_svx("projects", params.lang || 'en');;
    const news = await get_all_svx("news", params.lang || 'en');;
    return { projects, news };
}